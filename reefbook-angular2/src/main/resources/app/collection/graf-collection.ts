import {DotCollection} from './dot-collection';
import {GrafModel} from '../model/graf-model';

export class GrafCollection extends DotCollection {
    model = new GrafModel(0);

    url() {
        return this.commonBase.urlRoot() + '/home';
    }
}