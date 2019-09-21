/** @module @mantlebee/acl/routing */
import { IConverter, IFactory, List } from "../../tcl";
import { IRoute } from "./interfaces";

/**
 * Convert [[IRoute]] instances to framework-specific route configurations
 * @notes **T** is a generic type for _RouteConfig[]_, where **RouteConfig** has to be a framework specific route configuration
 * */
export class RoutesConfigFactory<T> implements IFactory<T> {
  private readonly _converter: IConverter<List<IRoute>, T>;
  private readonly _routes: List<IRoute>;

  public constructor(
    routes: List<IRoute>,
    converter: IConverter<List<IRoute>, T>
  ) {
    this._converter = converter;
    this._routes = routes;
  }

  public createDebug(): T {
    return this.createRelease();
  }
  public createRelease(): T {
    return this._converter.convert(this._routes);
  }
}
