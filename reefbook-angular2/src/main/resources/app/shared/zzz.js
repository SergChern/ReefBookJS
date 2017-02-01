"use strict";
var graf_collection_1 = require("../collection/graf-collection");
var menu1_collection_1 = require("../collection/menu1-collection");
var dot_collection_1 = require("../collection/dot-collection");
var dot_model_1 = require("../model/dot-model");
var ZZZ = (function () {
    function ZZZ() {
        this.ladenRib = {
            '000': {
                'init': function (self) {
                    self.collection = new menu1_collection_1.Menu1Collection();
                    self.url = self.collection.url();
                },
                'otherwise': function () {
                    // Событие есть, нужна реакция на него, хотя бы по умолчанию
                }
            },
            '098': {
                'init': function (self) {
                    self.collection = new graf_collection_1.GrafCollection();
                    self.url = self.collection.url();
                    //+      self.options['attrmodel'] = new Graf().attributes;
                },
                'otherwise': function () {
                    // Событие есть, нужна реакция на него, хотя бы по умолчанию
                }
            },
            'all': {
                'init': function (self) {
                    self.collection = new dot_collection_1.DotCollection();
                    self.url = self.collection.url();
                },
                'addRow': function (self) {
                    self.rowModel = new dot_model_1.DotModel();
                    for (var key in self.collection.model.defaults) {
                        self.rowModel[key] = self.collection.model.defaults[key];
                    }
                    self.rowModel.id = undefined;
                    self.goEkrRow(self);
                },
                'editRow': function (self) {
                    if (self.selectedModel.id == 0) {
                        var c = confirm("Вы не выбрали запись для редактирования?");
                        if (!c) {
                            self.displayRow = false;
                            return;
                        }
                    }
                    self.rowModel = self.selectedModel;
                    self.goEkrRow(self);
                },
                'deleteRow': function (self) {
                    self.displayRow = false;
                    if (self.selectedModel.id == 0) {
                        alert("Вы не выбрали запись для удаления. Операция отменена");
                    }
                    else {
                        var c = confirm("Вы действительно хотите удалить запись?");
                        if (!c) {
                            return;
                        }
                    }
                    self.restService.deleteModel(self.collection.model.urlRoot() + "/id=" +
                        self.selectedModel.id)
                        .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
                    self.collection.xhr.splice(self.findSelectedIndex(self), 1);
                    self.selectedModel.id = 0;
                },
                'cancel': function (self) {
                    self.cancel();
                },
                'otherwise': function () {
                    // Событие есть, нужна реакция на него, хотя бы по умолчанию
                }
            },
        };
    }
    return ZZZ;
}());
exports.ZZZ = ZZZ;
//# sourceMappingURL=zzz.js.map