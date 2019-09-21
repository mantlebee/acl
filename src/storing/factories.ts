/** @module @mantlebee/acl/storing */
import { IConverter, IFactory, List } from "../../tcl";
import { IStore } from "./interfaces";

/**
 * Convert [[IStore]] instances to framework-specific store configurations
 * @notes **T** is a generic type for _StoreConfig[]_, where **StoreConfig** has to be a framework specific store configuration
 * */
export class StoreConfigFactory<T> implements IFactory<T> {
  private readonly _converter: IConverter<List<IStore<any>>, T>;
  private readonly _stores: List<IStore<any>>;

  public constructor(
    stores: List<IStore<any>>,
    converter: IConverter<List<IStore<any>>, T>
  ) {
    this._converter = converter;
    this._stores = stores;
  }

  public createDebug(): T {
    return this.createRelease();
  }
  public createRelease(): T {
    return this._converter.convert(this._stores);
  }
}
