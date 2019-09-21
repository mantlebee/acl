/** @module @mantlebee/acl/routing */
import { List } from "../../tcl";

import { IRoute } from "./interfaces";
import { isNamedRoute } from "./utils";

/**
 * Setters and getters for [[IRoute]] instances; useful to restrict client-side routing via Webpack chunks and server-side rendering.
 * */
export class RoutesPool {
  private static _routes: List<IRoute> = [];

  public static addRoute(route: IRoute): void {
    RoutesPool._routes.push(route);
  }
  public static addRoutes(routes: List<IRoute>): void {
    RoutesPool._routes = RoutesPool._routes.concat(routes);
  }
  public static clearRoutes(): void {
    RoutesPool._routes = [];
  }
  public static getAllRoutes(): List<IRoute> {
    return RoutesPool._routes;
  }
  public static getNamedRoutes(): List<IRoute> {
    return RoutesPool._routes.filter(a => isNamedRoute(a));
  }
}
