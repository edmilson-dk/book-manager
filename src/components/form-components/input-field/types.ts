import { InputHTMLAttributes, ReactNode } from "react";

export type InputFieldPropsType = InputHTMLAttributes<HTMLInputElement> & {
  IconComponent: ReactNode;
}