import { InputFieldPropsType } from "./types";

import "src/styles/components/form-components/input-field/styles.module.scss";

export function InputField({ ...props }: InputFieldPropsType) {
  return (
    <div className="input-field">
      <input {...props} />
    </div>
  )
}