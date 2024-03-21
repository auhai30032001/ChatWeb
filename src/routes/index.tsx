import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../layouts/PageWrapper";
import { RouteType } from "./config";
import routesConfig from "./Routes";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      index
      path={route.path}
      element={<PageWrapper>{route.element}</PageWrapper>}
      key={index}
    />
  ));
};

export const routes: ReactNode = generateRoute(routesConfig);
