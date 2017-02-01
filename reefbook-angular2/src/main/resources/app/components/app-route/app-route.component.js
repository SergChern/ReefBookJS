"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rest_service_1 = require("../../services/rest.service");
var dot_component_1 = require("../dot/dot.component");
var view_component_1 = require("../view/view.component");
var AppRouterComponent = (function (_super) {
    __extends(AppRouterComponent, _super);
    function AppRouterComponent(router, activateRoute, restService) {
        var _this = _super.call(this, router, activateRoute, restService) || this;
        _this.router = router;
        _this.activateRoute = activateRoute;
        _this.restService = restService;
        _this.data0 = "";
        _this.imt = '000';
        return _this;
    }
    AppRouterComponent.prototype.initekrsuccess = function (jsonData) {
        var _this = this;
        _super.prototype.initekrsuccess.call(this, jsonData);
        //+    $.find('title')[0].text = this.ekr.title;
        this.routes = [];
        this.restService.takeOnUrl(this.url).subscribe(function (res) {
            var xhr = res.json();
            var prekey = _this.commonBase.preKey();
            for (var m in xhr) {
                _this.data0 += xhr[m].rowTag;
                var keyroute = prekey + xhr[m].key;
                _this.routes.push({ path: keyroute, component: xhr[m].item });
                _this.ekr[keyroute] = {};
                _this.ekr[keyroute].elEkr = xhr[m].elekr;
                _this.ekr[keyroute].imt = xhr[m].imt;
                _this.ekr[keyroute].shrtCut = xhr[m].shrtCut;
            }
            //   this.initfunction();
        }, function (error) {
            console.log(error);
        });
    };
    return AppRouterComponent;
}(dot_component_1.DotComponent));
AppRouterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app-route',
        templateUrl: 'app-route.component.html',
        styleUrls: ['app-route.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, rest_service_1.RestService])
], AppRouterComponent);
exports.AppRouterComponent = AppRouterComponent;
exports.routes0 = [
    { path: 'item/:id', component: view_component_1.ViewComponent, pathMatch: 'full' },
    { path: '**', component: view_component_1.ViewComponent }
];
//# sourceMappingURL=app-route.component.js.map