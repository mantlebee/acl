/** @module @mantlebee/acl/localization */
import { List } from "lib/tcl";

import { ILanguage } from "./interfaces";

export class LanguagesPool {
  private static _languages: List<ILanguage<any>> = [];

  public static addlanguage(language: ILanguage<any>) {
    LanguagesPool._languages.push(language);
  }
  public static addlanguages(languages: List<ILanguage<any>>) {
    LanguagesPool._languages = LanguagesPool._languages.concat(languages);
  }
  public static clearLanguages(): void {
    LanguagesPool._languages = [];
  }
  public static getLanguages(): List<ILanguage<any>> {
    return LanguagesPool._languages;
  }
}
