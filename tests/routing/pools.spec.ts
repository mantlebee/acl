import { IRoute, RoutesPool } from "@/routing";
import { expect } from "chai";
import { beforeEach, describe, it } from "mocha";

const namespace = "acl/routing/pools";

describe(namespace, () => {
  describe(`${namespace}.RoutesPool`, () => {
    beforeEach(() => {
      RoutesPool.clearRoutes();
    });
    it("getter for named routes mustn't returns routes with invalid names", () => {
      const validNamedRoute: IRoute = { path: "/home", name: "home" };
      const invalidNamedRoute: IRoute = { path: "/about", name: "" };
      RoutesPool.addRoutes([validNamedRoute, invalidNamedRoute]);
      expect(RoutesPool.getNamedRoutes().length).to.be.equal(1);
    });
    it("getters must always return an array", () => {
      expect(RoutesPool.getAllRoutes().length).to.be.equal(0);
    });
  });
});
