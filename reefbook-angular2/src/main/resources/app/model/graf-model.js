"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dot_model_1 = require("./dot-model");
var GrafModel = (function (_super) {
    __extends(GrafModel, _super);
    function GrafModel(id, imt, rebro, npp, workload, mask, id_User, m, pdel, oldRebro) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.imt = imt;
        _this.rebro = rebro;
        _this.npp = npp;
        _this.workload = workload;
        _this.mask = mask;
        _this.id_User = id_User;
        _this.m = m;
        _this.pdel = pdel;
        _this.oldRebro = oldRebro;
        _this.defaults = {
            'imt': 'empty',
            'rebro': 'empty',
            'npp': '1',
            'workload': 'empty',
            'mask': 'empty',
            'id_User': '1',
            'm': 'false',
            'pdel': 'false',
            'oldRebro': 'empty'
        };
        return _this;
    }
    GrafModel.prototype.urlRoot = function () {
        return this.commonBase.urlRoot() + '/graf';
    };
    GrafModel.prototype.url = function () {
        return this.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    };
    return GrafModel;
}(dot_model_1.DotModel));
exports.GrafModel = GrafModel;
//# sourceMappingURL=graf-model.js.map