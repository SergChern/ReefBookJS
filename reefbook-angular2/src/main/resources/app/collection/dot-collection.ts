import { CommonBase } from '../shared/common-base';
import {DotModel} from '../model/dot-model';

export class DotCollection {
    model = new DotModel(0);
    xhr: Array<any> = [];

    commonBase:CommonBase = new CommonBase();

    url() {
        return null;
    }
}