import { ReactNode, ReactElement } from "react";

export type RouteType = {
  element: ReactNode;
  index?: boolean;
  path?: string;
  sidebarProps?: {
    displayText: string;
    icon: ReactElement;
  };
};
