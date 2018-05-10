import * as React from "react";
import styles from "./Crud.module.scss";
import { ICrudContainerProps } from "./ICrudContainerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import NewItem from "./NewItem/Newitem";

export default class CrudContainer extends React.Component<
  ICrudContainerProps,
  {}
> {
  public render(): React.ReactElement<ICrudContainerProps> {
    return (
      <div className={styles.crud}>
        <NewItem />
      </div>
    );
  }
}
