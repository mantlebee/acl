import { IRoute, isNamedRoute } from "@/routing";
import { expect } from "chai";
import { describe, it } from "mocha";

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
    it("name routes must have a valid name", () => {
      const route: IRoute = { path: "/home", name: "home" };
      expect(isNamedRoute(route)).to.be.true;
    });
  });
});
