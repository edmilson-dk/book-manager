import { TextAreaFieldPropsType } from "./types";

import styles from "src/styles/components/form-components/textarea-field/styles.module.scss";

export function TextAreaField({ IconComponent, ...props }: TextAreaFieldPropsType) {
  return (
    <div className={styles.textAreaField}>
      <textarea {...props} />
      {IconComponent}
    </div>
  )
}