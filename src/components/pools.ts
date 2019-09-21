/** @module @mantlebee/acl/components */
import { IComponentsCatalog } from "./catalogs";

export class ComponentsCatalogPool {
  private static _catalog: IComponentsCatalog<any>;

  public static getCatalog(): IComponentsCatalog<any> {
    return ComponentsCatalogPool._catalog;
  }
  public static setCatalog(catalog: IComponentsCatalog<any>): void {
    ComponentsCatalogPool._catalog = catalog;
  }
}
