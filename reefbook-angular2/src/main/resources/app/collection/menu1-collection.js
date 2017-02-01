"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dot_collection_1 = require("./dot-collection");
var menu1_model_1 = require("../model/menu1-model");
var Menu1Collection = (function (_super) {
    __extends(Menu1Collection, _super);
    function Menu1Collection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = new menu1_model_1.Menu1Model(0);
        return _this;
    }
    Menu1Collection.prototype.url = function () {
        return this.commonBase.urlRoot() + '/routemenu';
    };
    return Menu1Collection;
}(dot_collection_1.DotCollection));
exports.Menu1Collection = Menu1Collection;
//# sourceMappingURL=menu1-collection.js.map