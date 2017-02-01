import {DotModel} from './dot-model';

export class GrafModel extends DotModel {
    constructor(public id:number,
                public imt?:string,
                public rebro?:string,
                public npp?:string,
                public workload?:string,
                public mask?:string,
                public id_User?:string,
                public m?:string,
                public pdel?:string,
                public oldRebro?:string) {
        super(id);
    }

    urlRoot() {
        return this.commonBase.urlRoot() + '/graf';
    }

    url() {
        return this.urlRoot() + (this.id == undefined) ? 'ins' : '/id=' + this.id;
    }

    defaults = {
        'imt': 'empty',
        'rebro': 'empty',
        'npp': '1',
        'workload': 'empty',
        'mask': 'empty',
        'id_User': '1',
        'm': 'false',
        'pdel': 'false',
        'oldRebro': 'empty'
    }
}