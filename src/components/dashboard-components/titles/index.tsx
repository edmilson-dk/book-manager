import { TitleProps } from "./types";

import styles from "src/styles/components/dashboard-components/titles/styles.module.scss";

export function TitleComponent({ text, color }: TitleProps) {
  return (
    <h2 className={styles.titlePrimary} style={{ color }}>
      {text}
    </h2>
  );
}