"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_route_component_1 = require("./components/app-route/app-route.component");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
require("rxjs/add/operator/toPromise");
var rest_service_1 = require("./services/rest.service");
var view_component_1 = require("./components/view/view.component");
var dot_component_1 = require("./components/dot/dot.component");
var grid_component_1 = require("./components/grid/grid.component");
var row_component_1 = require("./components/row/row.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule,
            router_1.RouterModule.forRoot(app_route_component_1.routes0)],
        declarations: [app_component_1.AppComponent, app_route_component_1.AppRouterComponent, view_component_1.ViewComponent, dot_component_1.DotComponent,
            grid_component_1.GridComponent, row_component_1.RowComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, rest_service_1.RestService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map