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
var rest_service_1 = require("../../services/rest.service");
var common_base_1 = require("../../shared/common-base");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var RowComponent = (function () {
    function RowComponent(restService) {
        this.restService = restService;
        this.onDisplayRow = new core_1.EventEmitter();
        this.commonBase = new common_base_1.CommonBase();
    }
    RowComponent.prototype.cancel = function () {
        this.onDisplayRow.emit(false);
    };
    RowComponent.prototype.ngOnInit = function () {
        this.rootUrl = this.collectionFromGrid.model.urlRoot();
    };
    RowComponent.prototype.clickButton = function (event) {
        var id = event.currentTarget.id;
        this.commonBase.runZZZ(this, 'all', id);
    };
    RowComponent.prototype.submit = function () {
        var _this = this;
        if (this.rowModel.id == undefined) {
            this.restService.addModel(this.rootUrl + "ins", this.rowModel)
                .subscribe(function (res) {
                _this.collectionFromGrid.xhr.push(res.json());
            }, function (error) { return console.log(error); });
        }
        else {
            this.restService.putModel(this.rootUrl + "/id=" + this.rowModel.id, this.rowModel)
                .subscribe(function (res) {
                for (var key in res) {
                    _this.rowModel[key] = res[key];
                }
            }, function (error) { return console.log(error); });
        }
        this.cancel();
    };
    return RowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RowComponent.prototype, "rowModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RowComponent.prototype, "ekrRow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RowComponent.prototype, "imt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RowComponent.prototype, "collectionFromGrid", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RowComponent.prototype, "onDisplayRow", void 0);
RowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'row-app',
        styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
        template: "\n    <form form #myForm=\"ngForm\" novalidate (ngSubmit)=\"submit()\">\n    <h3  *ngIf=\"rowModel.id == undefined\">\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C</h3>\n    <h3  *ngIf=\"rowModel.id !=  undefined\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438</h3>\n    <div *ngFor=\"let ctrl of ekrRow.formcontrols\"  class=\"form-group\" >\n        <label>{{ctrl.label}}</label>\n        <input class=\"form-control\" name={{ctrl.name}} [(ngModel)]=\"rowModel[ctrl.name]\" required />\n    </div>\n\n    <div class=\"form-group\">\n       <button *ngFor=\"let but of ekrRow.button\" type=\"button\" pButton\n                  [icon]=\"but.icon\" style=\"float:left\" (click)=\"clickButton($event)\"\n                  [label]=\"but.label\" [id]=\"but.click\">\n\n    </button>\n<button type=\"button\" pButton class=\"btn btn-default\" [disabled]=\"myForm.invalid\"\n                  icon=\"fa fa-floppy-o\" style=\"float:left\" (click)=\"submit()\"\n                  label=\"Save\" >\n\n    </button>\n\n    </div>\n</form>\n    "
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService])
], RowComponent);
exports.RowComponent = RowComponent;
//# sourceMappingURL=row.component.js.map