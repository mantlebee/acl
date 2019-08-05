import { expect } from "chai";
import { describe, it } from "mocha";
import { IRoute } from "./interfaces";
import { isNamedRoute } from "./utils";

const namespace = "acl/routing/utils";

describe(namespace, () => {
  describe(`${namespace}.isNamedRoute`, () => {
    it("named routes must have the name property", () => {
      const route: IRoute = { path: "/home" };
      expect(isNamedRoute(route)).to.be.false;
    });
    it("name property of named routes can't be empty", () => {
      const route: IRoute = { path: "/home", name: "" };
      expect(isNamedRoute(route)).to.be.false;
    });
  });
});
