import * as React from "react";
import Button from "@material-ui/core/Button";

class Root extends React.Component {
  public render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Root;
