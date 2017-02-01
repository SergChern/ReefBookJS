import { CommonBase } from '../shared/common-base';

export class DotModel {
    commonBase:CommonBase = new CommonBase();

    constructor(public id?: number) { }

    url() {
        return this.commonBase.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    }

    urlRoot() {
        return this.commonBase.urlRoot();
    }

    defaults = {
    }
}