import { ButtonHTMLAttributes, ReactNode } from "react";

export type DashboardNavigatorBtnPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  IconComponent: ReactNode;
  toRoute: string;
}