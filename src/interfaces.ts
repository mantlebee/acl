/** @module @mantlebee/acl */
export interface IApplication {
  run(): void;
}

export interface IApplicationPlugin<T> {
  getInstance(): T;
  register(): void;
}
