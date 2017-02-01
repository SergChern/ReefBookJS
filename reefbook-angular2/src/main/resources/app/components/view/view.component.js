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
var ViewComponent = (function (_super) {
    __extends(ViewComponent, _super);
    function ViewComponent(router, activateRoute, restService) {
        var _this = _super.call(this, router, activateRoute, restService) || this;
        _this.router = router;
        _this.activateRoute = activateRoute;
        _this.restService = restService;
        return _this;
    }
    ViewComponent.prototype.initekrsuccess = function (jsonData) {
        _super.prototype.initekrsuccess.call(this, jsonData);
    };
    return ViewComponent;
}(dot_component_1.DotComponent));
ViewComponent = __decorate([
    core_1.Component({
        selector: 'view-app',
        template: "\n    <div id=\"example\">\n    <h3  *ngIf=\"nameNotFoundComp!=''\">{{nameNotFoundComp}}</h3>\n    <div *ngIf=\"nameNotFoundComp==''\" id=\"ekr0\">{{initTemplate}}\n        <grid-app *ngIf=\"grid.columns!=undefined\"></grid-app>\n    </div>\n</div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, rest_service_1.RestService])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map