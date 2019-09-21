/** @module @mantlebee/acl/localization */
export interface ILanguage<T extends IVocabolary> {
  readonly name: string;
  readonly vocabolary: T;
}

export interface IVocabolary {
  [key: string]: string | IVocabolary;
}
