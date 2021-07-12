import { useRouter } from "next/router";

import { DashboardNavigatorBtnPropsType } from "./types";

export function DashboardNavigatorBtn({ IconComponent, toRoute }: DashboardNavigatorBtnPropsType) {
  const nextRouter = useRouter();
  const pathname = nextRouter.pathname;
  const formattedRouter = toRoute[0] === "/" ? toRoute.slice(1) : toRoute;

  function handleClick() {
    nextRouter.push(`/${formattedRouter}`);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        ${`/${formattedRouter}` === pathname ? "routeActive" : ""}
      `}
    >
      {IconComponent}
    </button>
  );
}