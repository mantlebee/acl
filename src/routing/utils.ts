/** @module @mantlebee/acl/routing */
import { IRoute } from "./interfaces";

/**
 * Check if the [[IRoute]] instance has the **name** property.
 * @param route
 */
export function isNamedRoute(route: IRoute): boolean {
  return route.hasOwnProperty("name") && route.name !== "";
}
