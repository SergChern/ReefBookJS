"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dot_collection_1 = require("./dot-collection");
var graf_model_1 = require("../model/graf-model");
var GrafCollection = (function (_super) {
    __extends(GrafCollection, _super);
    function GrafCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = new graf_model_1.GrafModel(0);
        return _this;
    }
    GrafCollection.prototype.url = function () {
        return this.commonBase.urlRoot() + '/home';
    };
    return GrafCollection;
}(dot_collection_1.DotCollection));
exports.GrafCollection = GrafCollection;
//# sourceMappingURL=graf-collection.js.map