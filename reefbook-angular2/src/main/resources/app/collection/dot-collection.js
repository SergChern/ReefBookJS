"use strict";
var common_base_1 = require("../shared/common-base");
var dot_model_1 = require("../model/dot-model");
var DotCollection = (function () {
    function DotCollection() {
        this.model = new dot_model_1.DotModel(0);
        this.xhr = [];
        this.commonBase = new common_base_1.CommonBase();
    }
    DotCollection.prototype.url = function () {
        return null;
    };
    return DotCollection;
}());
exports.DotCollection = DotCollection;
//# sourceMappingURL=dot-collection.js.map