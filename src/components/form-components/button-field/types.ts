import { ButtonHTMLAttributes } from "react";

export type ButtonFieldPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
}