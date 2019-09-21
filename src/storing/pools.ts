/** @module @mantlebee/acl/routing */
import { List } from "../../tcl";
import { IStore } from "./interfaces";

/**
 * Setters and getters for [[IStore]] instances; useful to restrict client-side storing via Webpack chunks and server-side rendering.
 * */
export class StoresPool {
  private static _stores: List<IStore<any>> = [];

  public static addStore(store: IStore<any>): void {
    StoresPool._stores.push(store);
  }
  public static addStores(stores: List<IStore<any>>): void {
    StoresPool._stores = StoresPool._stores.concat(stores);
  }
  public static clearStores(): void {
    StoresPool._stores = [];
  }
  public static getStores(): List<IStore<any>> {
    return StoresPool._stores;
  }
}
