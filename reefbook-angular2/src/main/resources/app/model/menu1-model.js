"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dot_model_1 = require("./dot-model");
var Menu1Model = (function (_super) {
    __extends(Menu1Model, _super);
    function Menu1Model(id) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.defaults = {};
        return _this;
    }
    Menu1Model.prototype.urlRoot = function () {
        return this.commonBase.urlRoot() + '/menu1';
    };
    Menu1Model.prototype.url = function () {
        return this.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    };
    return Menu1Model;
}(dot_model_1.DotModel));
exports.Menu1Model = Menu1Model;
//# sourceMappingURL=menu1-model.js.map