import * as React from "react";
import { TextField, Button, ButtonType } from "office-ui-fabric-react";

import IViewDataProps from "./IViewData";

export default class ViewData extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <TextField placeholder={"place a text here"} autoComplete="off" />
        <div>
          <Button className="ms-borderColor-themeDarkAlt ms-bgColor-themeTertiary ms-bgColor-themeDarkAlt--hover">
            Add
          </Button>
        </div>
      </div>
    );
  }
}
