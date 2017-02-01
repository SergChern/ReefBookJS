"use strict";
var common_base_1 = require("../shared/common-base");
var DotModel = (function () {
    function DotModel(id) {
        this.id = id;
        this.commonBase = new common_base_1.CommonBase();
        this.defaults = {};
    }
    DotModel.prototype.url = function () {
        return this.commonBase.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    };
    DotModel.prototype.urlRoot = function () {
        return this.commonBase.urlRoot();
    };
    return DotModel;
}());
exports.DotModel = DotModel;
//# sourceMappingURL=dot-model.js.map