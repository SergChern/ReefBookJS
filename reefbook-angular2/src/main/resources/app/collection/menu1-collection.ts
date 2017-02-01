import {DotCollection} from './dot-collection';
import {Menu1Model} from '../model/menu1-model';

export class Menu1Collection extends DotCollection {
    model = new Menu1Model(0);

    url() {
        return this.commonBase.urlRoot() + '/routemenu';
    }
}