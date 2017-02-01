import { GrafCollection } from '../collection/graf-collection';
import { Menu1Collection } from '../collection/menu1-collection';
import { DotCollection } from '../collection/dot-collection';
import { DotModel } from '../model/dot-model';

export class ZZZ {
    ladenRib = {
        '000': {
            'init': function (self) {
                self.collection = new Menu1Collection();
                self.url = self.collection.url();
            },
            'otherwise': function () {
                // Событие есть, нужна реакция на него, хотя бы по умолчанию
            }
        },
        '098': {
            'init': function (self) {
                self.collection = new GrafCollection();
                self.url = self.collection.url();
                //+      self.options['attrmodel'] = new Graf().attributes;
            },
            'otherwise': function () {
                // Событие есть, нужна реакция на него, хотя бы по умолчанию
            }
        },
        'all': {
            'init': function (self) {
                self.collection = new DotCollection();
                self.url = self.collection.url();
            },
            'addRow': function (self) {
                self.rowModel = new DotModel();

                for (var key in self.collection.model.defaults) {
                    self.rowModel[key]=self.collection.model.defaults[key];
                }

                self.rowModel.id = undefined;
                self.goEkrRow(self);
            },

            'editRow': function (self) {
                if (self.selectedModel.id == 0) {
                    let c = confirm("Вы не выбрали запись для редактирования?");
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
                    let c = confirm("Вы действительно хотите удалить запись?");
                    if (!c) {
                        return;
                    }
                }

                self.restService.deleteModel(self.collection.model.urlRoot() + "/id=" +
                    self.selectedModel.id)
                    .subscribe(
                        result => console.log(result),
                        error => console.log(error)
                );
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
    }
}