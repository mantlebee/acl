/** @module @mantlebee/acl/storing */

export type AsyncSetter = (...args: any) => Promise<any>;
export type Getter = (...args: any) => any;
export type Setter = (...args: any) => void;
