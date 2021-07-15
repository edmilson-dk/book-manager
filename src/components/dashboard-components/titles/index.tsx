import { TitleProps } from "./types";

import styles from "src/styles/components/dashboard-components/titles/styles.module.scss";

export function TitleComponent({ text }: TitleProps) {
  return (
    <h2 className={styles.titlePrimary}>
      {text}
    </h2>
  );
}