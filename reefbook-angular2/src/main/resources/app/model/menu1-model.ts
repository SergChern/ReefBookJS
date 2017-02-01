import {DotModel} from './dot-model';

export class Menu1Model extends DotModel {
    constructor(public id:number) {
        super(id);
    }

    urlRoot() {
        return this.commonBase.urlRoot() + '/menu1';
    }

    url() {
        return this.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    }

    defaults = {
    }
}