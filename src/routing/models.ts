// import { List } from "@mantlebee/tcl";
// import { IRouter, IRoute } from "./interfaces";

// export class Router implements IRouter {
//  private readonly _router: IRouter;
//  private _stack: List<IRoute>;
//  private _index: number;

//  public constructor(router: IRouter, currentRoute: IRoute) {
//    this._router = router;
//    this._stack = [currentRoute];
//    this._index = 0;
//  }

//  public routeTo(route: IRoute) {
//    if (this.canRouteForward) {
//      this._stack.splice(this._index);
//    }
//    this._stack.push(route);
//    this._index++;
//    this._router.routeTo(route);
//  }
//  public routeBack(): void {
//    if (this.canRouteBack) {
//      this._index--;
//      this._router.routeBack();
//    }
//  }
//  public routeForward(): void {
//    if (this.canRouteForward) {
//      this._index++;
//      this._router.routeForward();
//    }
//  }

//  public canRouteBack(): boolean {
//    return this._index > 0;
//  }
//  public canRouteForward(): boolean {
//    return this._index < this._stack.length - 1;
//  }
//}
