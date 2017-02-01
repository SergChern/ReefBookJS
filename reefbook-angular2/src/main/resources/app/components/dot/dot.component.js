"use strict";
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
var common_base_1 = require("../../shared/common-base");
var DotComponent = (function () {
    function DotComponent(router, activateRoute, restService) {
        var _this = this;
        this.router = router;
        this.activateRoute = activateRoute;
        this.restService = restService;
        this.nameNotFoundComp = '';
        this.grid = {};
        this.commonBase = new common_base_1.CommonBase();
        this.rootUrl = (window['rootUrl'] == undefined) ? this.commonBase.urlRoot() : window['rootUrl'];
        this.subscription = activateRoute.params.subscribe(function (params) {
            _this.clearComponent(params);
        });
    }
    DotComponent.prototype.ngOnInit = function () {
        this.initDot();
    };
    DotComponent.prototype.initDot = function () {
        var _this = this;
        if (this.imt != undefined) {
            this.nameNotFoundComp = '';
            if (this.imt == '')
                return;
            this.commonBase.runZZZ(this, this.imt, 'init');
            //+ _.extend(this, new ShortcutsPlus);
            this.restService.goImt(this.rootUrl, this.imt).subscribe(function (res) {
                var jsonData = res.json();
                if (jsonData.length != 0) {
                    _this.initekrsuccess(jsonData);
                }
                else {
                    _this.nameNotFoundComp = 'Страница не найдена';
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    DotComponent.prototype.clearComponent = function (params) {
        if (params['id'] != undefined) {
            this.imt = params['id'];
            if (this.grid.columns != undefined) {
                this.grid.columns = undefined;
            }
            this.initDot();
        }
    };
    DotComponent.prototype.initekrsuccess = function (jsonData) {
        this.fillGoImt(jsonData);
    };
    DotComponent.prototype.fillGoImt = function (jsonData) {
        for (var row in jsonData) {
            if (jsonData[row].hasOwnProperty("dust")) {
                this.initTemplate = jsonData[row].dust;
            }
            else if (jsonData[row].hasOwnProperty("ekr")) {
                jsonData[row].ekr = jsonData[row].ekr.split('function').join('"function');
                jsonData[row].ekr = jsonData[row].ekr.split('};').join('"');
                this.ekr = JSON.parse(jsonData[row].ekr.toString());
            }
            else if (jsonData[row].grid == undefined) {
                this.grid = {};
            }
            else {
                this.grid = JSON.parse(jsonData[row].grid);
                this.grid = this.grid.grid[0];
            }
        }
    };
    DotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return DotComponent;
}());
DotComponent = __decorate([
    core_1.Component({
        selector: 'not-found-comp',
        template: "<p></p>"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, rest_service_1.RestService])
], DotComponent);
exports.DotComponent = DotComponent;
//# sourceMappingURL=dot.component.js.map