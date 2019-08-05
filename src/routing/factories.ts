/** @module @mantlebee/acl/routing */

import { IConverter, IFactory, List } from "@mantlebee/tcl";
import { IRoute } from "./interfaces";

/**
 * Convert [[IRoute]] instances to framework-specific route configurations
 * @notes **TRoutesConfig** is a generic type for _RouteConfig[]_, where **RouteConfig** has to be a framework specific route configuration
 * */
export class RoutesConfigFactory<TRoutesConfig>
  implements IFactory<TRoutesConfig> {
  private readonly _converter: IConverter<List<IRoute>, TRoutesConfig>;
  private readonly _routes: List<IRoute>;
  public constructor(
    routes: List<IRoute>,
    converter: IConverter<List<IRoute>, TRoutesConfig>
  ) {
    this._converter = converter;
    this._routes = routes;
  }
  createDebug() {
    return this.createRelease();
  }
  createRelease() {
    return this._converter.convert(this._routes);
  }
}
