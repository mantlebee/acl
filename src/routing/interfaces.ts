/** @module @mantlebee/acl/routing */
import { List } from "../../tcl";

/**
 * Application route usable by Javascript frameworks, converting it via [[RoutesConfigFactory]].
 * @notes Routes without the **name** property must be simple redirect routes
 * */
export interface IRoute {
  readonly path: string;

  readonly children?: List<IRoute>;
  readonly name?: string;
  readonly redirect?: IRoute;
}

/**
 * Application router, usable by navigation services if implemented with Javascript frameworks, to manage the routing programmatically.
 * */
export interface IRouter {
  readonly canRouteBack: boolean;
  readonly canRouteForward: boolean;
  routeBack(): void;
  routeForward(): void;
  routeTo(toRoute: IRoute, fromRoute?: IRoute): void;
}
