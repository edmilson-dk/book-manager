import { ButtonFieldPropsType } from "./types";

import styles from "src/styles/components/form-components/button-field/styles.module.scss";

export function ButtonField({ text, ...props }: ButtonFieldPropsType) {
  return (
    <button {...props} className={styles.buttonField}>
      {text}
    </button>
  )
}