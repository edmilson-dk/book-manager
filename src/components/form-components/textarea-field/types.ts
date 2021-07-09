import { TextareaHTMLAttributes, ReactNode } from "react";

export type TextAreaFieldPropsType = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  IconComponent: ReactNode;
}