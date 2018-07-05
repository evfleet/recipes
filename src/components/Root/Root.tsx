import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { AppState } from "../../state/store";
import { AuthState } from "../../state/auth";
import { uiActions, UIState } from "../../state/ui";

import Landing from "../../screens/Landing";

interface StateProps {
  auth: AuthState;
  ui: UIState;
}

interface ActionProps {
  onViewportUpdate: (width: number, height: number) => void;
}

const mapStateToProps = ({ auth, ui }: AppState) => ({ auth, ui });

const mapDispatchToProps = {
  onViewportUpdate: uiActions.updateDimensions
};

class Root extends React.Component<StateProps & ActionProps> {
  public componentDidMount() {
    this.updateViewportDimensions();
    window.addEventListener("resize", this.updateViewportDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewportDimensions);
  }

  public updateViewportDimensions = () => {
    this.props.onViewportUpdate(window.innerWidth, window.innerHeight);
  };

  public render() {
    const { ui } = this.props;

    if (!ui.ready) {
      return <div>Loading</div>;
    }

    return (
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    );
  }
}

export default connect<StateProps, ActionProps>(
  mapStateToProps,
  mapDispatchToProps
)(Root);
