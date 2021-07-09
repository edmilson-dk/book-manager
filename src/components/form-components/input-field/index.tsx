import { InputFieldPropsType } from "./types";

import styles from "src/styles/components/form-components/input-field/styles.module.scss";

export function InputField({ IconComponent, ...props }: InputFieldPropsType) {
  return (
    <div className={styles.inputField}>
      <input {...props} />
      {IconComponent}
    </div>
  )
}