import * as React from "react";
import { TextField, Button, ButtonType } from "office-ui-fabric-react";
import { MaskedTextField } from "office-ui-fabric-react/lib/TextField";

import IViewDataProps from "./INewItem";

export default class NewItem extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <div>
          <TextField
            label="First Name"
            placeholder={"joão"}
            autoComplete="off"
            id="txtName"
          />
        </div>
        <br />
        <div>
          <TextField
            label="Surname"
            placeholder={"Silva"}
            autoComplete="off"
            id="txtSurname"
          />
        </div>
        <br />
        <div>
          <MaskedTextField label="Date of Birth" mask="99/99/9999" />
        </div>
        <div>
          <br />
          <br />
          <Button
            onClick={this._alertClicked}
            className="ms-borderColor-themeDarkAlt ms-bgColor-themeTertiary ms-bgColor-themeDarkAlt--hover"
          >
            Add
          </Button>
        </div>
      </div>
    );
  }

  private _alertClicked(): void {
    alert("Clicked !!!");
  }
}
