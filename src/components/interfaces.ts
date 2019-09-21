/** @module @mantlebee/acl/components */
import { ICommand } from "lib/tcl";

import { IconPositions } from "./constants";

export interface IButton<T> {
  command: ICommand<T>;
  label: ILabel;
}

export interface IIcon {
  name: string;
  spin: boolean;
}

export interface ILabel {
  icon: IIcon;
  iconPosition: IconPositions;
  name: string;
}
