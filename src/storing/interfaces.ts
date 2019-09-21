/** @module @mantlebee/acl/storing */
import { Dictionary } from "vue-router/types/router";

import { AsyncSetter, Getter, Setter } from "./types";

export interface IStore<T> {
  asyncSetters: Dictionary<AsyncSetter>;
  data: T;
  getters: Dictionary<Getter>;
  path: string;
  setters: Dictionary<Setter>;
}
