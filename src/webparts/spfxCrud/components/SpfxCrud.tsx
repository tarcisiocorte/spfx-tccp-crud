import * as React from "react";
import { ISpfxCrudProps } from "./ISpfxCrudProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { TextField, Button, ButtonType } from "office-ui-fabric-react";
import { MaskedTextField } from "office-ui-fabric-react/lib/TextField";

export default class SpfxCrud extends React.Component<ISpfxCrudProps, {}> {
  public render(): React.ReactElement<ISpfxCrudProps> {
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
          <Button className="ms-borderColor-themeDarkAlt ms-bgColor-themeTertiary ms-bgColor-themeDarkAlt--hover">
            Add
          </Button>
        </div>
      </div>
    );
  }
}
