import { expect } from "chai";
import { describe, it } from "mocha";
import { List, IConverter, notImplemented } from "@mantlebee/tcl";
import { RoutesConfigFactory } from "@/routing";
import { IRoute } from "@/routing";

const namespace = "acl/routing/factories";

describe(namespace, () => {
  describe(`${namespace}.RoutesConfigFactory`, () => {
    type ConvertedRoute = { path: string; isConverted: boolean };
    const converter: IConverter<List<IRoute>, List<ConvertedRoute>> = {
      convert(fromRoutes: List<IRoute>) {
        const toRoutes: List<ConvertedRoute> = [];
        for (const route of fromRoutes) {
          toRoutes.push({ ...route, isConverted: true });
        }
        return toRoutes;
      },
      convertBack(toRoutes: List<ConvertedRoute>) {
        return notImplemented();
      }
    };
    it("All routes must be converted correctly", () => {
      const routes: List<IRoute> = [{ path: "/home" }, { path: "/about" }];
      const factory = new RoutesConfigFactory(routes, converter);
      const convertedRoutes = factory.createRelease();
      expect(convertedRoutes.filter(a => a.isConverted).length).to.be.equal(
        routes.length
      );
    });
  });
});
