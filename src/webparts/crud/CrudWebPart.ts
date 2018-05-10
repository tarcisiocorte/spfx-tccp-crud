import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "CrudWebPartStrings";
import Crud from "./components/CrudContainer";
import { ICrudContainerProps } from "./components/ICrudContainerProps";

export interface ICrudWebPartProps {
  description: string;
  listName: string;
}

export default class CrudWebPart extends BaseClientSideWebPart<
  ICrudWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<
      ICrudContainerProps
    > = React.createElement(Crud, {
      description: this.properties.description,
      listName: this.properties.listName
    });
    const element1: React.ReactElement<
      ICrudContainerProps
    > = React.createElement(Crud, {
      description: this.properties.description,
      listName: this.properties.listName
    });

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "This is a title for the configuration panel"
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.listNameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
