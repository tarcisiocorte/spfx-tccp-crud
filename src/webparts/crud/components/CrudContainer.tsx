import * as React from "react";
import styles from "./Crud.module.scss";
import { ICrudContainerProps } from "./ICrudContainerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import ViewData from "./ViewData";

export default class CrudContainer extends React.Component<
  ICrudContainerProps,
  {}
> {
  public render(): React.ReactElement<ICrudContainerProps> {
    return (
      <div className={styles.crud}>
        <ViewData />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <p className={styles.description}>
                {escape(this.props.authorName)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
