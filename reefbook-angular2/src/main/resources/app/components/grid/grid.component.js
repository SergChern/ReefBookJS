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
var GridComponent = (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent(router, activateRoute, restService) {
        var _this = _super.call(this, router, activateRoute, restService) || this;
        _this.router = router;
        _this.activateRoute = activateRoute;
        _this.restService = restService;
        _this.selectedModel = _this.collection.model;
        _this.displayRow = false;
        return _this;
    }
    GridComponent.prototype.initDot = function () {
        var _this = this;
        _super.prototype.initDot.call(this);
        this.grid.prow = [];
        if (this.url != null) {
            this.restService.takeOnUrl(this.url).subscribe(function (res) {
                _this.collection.xhr = res.json();
            }, function (error) {
                console.log(error);
            });
        }
    };
    GridComponent.prototype.goEkrRow = function (self) {
        self.nameNotFoundComp = '';
        //+ _.extend(this, new ShortcutsPlus);
        self.restService.goImt(self.rootUrl, self.ekr.imtRow).subscribe(function (res) {
            var jsonData = res.json();
            if (jsonData.length != 0) {
                for (var row in jsonData) {
                    if (jsonData[row].hasOwnProperty("ekr")) {
                        jsonData[row].ekr = jsonData[row].ekr.split('function').join('"function');
                        jsonData[row].ekr = jsonData[row].ekr.split('};').join('"');
                        self.ekrRow = JSON.parse(jsonData[row].ekr.toString());
                    }
                }
                self.displayRow = true;
            }
            else {
                self.nameNotFoundComp = 'Страница не найдена';
            }
        }, function (error) {
            console.log(error);
        });
    };
    GridComponent.prototype.clickButton = function (event) {
        var id = event.currentTarget.id;
        this.commonBase.runZZZ(this, 'all', id);
    };
    GridComponent.prototype.onDisplayRow = function (increased) {
        this.displayRow = increased;
        this.router.navigate(['/item/' + this.imt]);
    };
    GridComponent.prototype.findSelectedIndex = function (self) {
        return self.collection.xhr.indexOf(self.selectedModel);
    };
    return GridComponent;
}(dot_component_1.DotComponent));
GridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-app',
        template: "\n<div *ngIf=\"!displayRow\">\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n    </div>\n\n    <div>\n        <p-dataTable [value]=\"collection.xhr\" selectionMode=\"single\" [(selection)]=\"selectedModel\"\n                     [rows]=\"20\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"\n                     sortMode=\"multiple\" resizableColumns=\"true\" scrollHeight=\"350px\"\n                     [editable]=\"true\" [globalFilter]=\"gb\" #dt>\n            <header>{{grid.header}}</header>\n            <p-headerColumnGroup *ngIf=\"grid.prow.length > 0\">\n                <p-row *ngFor=\"let col0 of grid.prow\">\n                    <p-column *ngFor=\"let col1 of col0\" [header]=\"col1.header\" [rowspan]=\"col1.rowspan\"\n                              [colspan]=\"col1.colspan\">\n                    </p-column>\n                </p-row>\n            </p-headerColumnGroup>\n            <div *ngIf=\"grid.prow.length > 0\">\n                <p-column *ngFor=\"let col of grid.columns\" [field]=\"col.name\">\n                </p-column>\n            </div>\n            <div *ngIf=\"grid.prow.length == 0\">\n                <p-column *ngFor=\"let col of grid.columns\" [field]=\"col.name\" [header]=\"col.label\"\n                          [sortable]=\"col.sortable\" [editable]=\"col.editable\"\n                          [filter]=\"col.filter\" filterPlaceholder=\"Search\">\n                </p-column>\n            </div>\n            <footer>\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n                    <button *ngFor=\"let but of grid.button\" type=\"button\" pButton\n                            [icon]=\"but.icon\" style=\"float:left\" (click)=\"clickButton($event)\"\n                            [label]=\"but.label\" [id]=\"but.click\">\n                    </button>\n                </div>\n            </footer>\n        </p-dataTable>\n    </div>\n</div>\n<row-app *ngIf=\"displayRow\" [rowModel]=\"rowModel\" [ekrRow]=\"ekrRow\" [imt]=\"ekr.imtRow\"\n           [collectionFromGrid]= \"collection\" (onDisplayRow)=\"onDisplayRow($event)\">\n</row-app>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, rest_service_1.RestService])
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map