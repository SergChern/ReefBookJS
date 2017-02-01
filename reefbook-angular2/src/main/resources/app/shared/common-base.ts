import { ZZZ } from './zzz';

export class CommonBase {
    zzz:ZZZ = new ZZZ();

    urlRoot() {
        if (window['rootUrl'] === undefined) {
            let kk = window.location.pathname.split('/');

            if (kk.length > 2) {
                kk[2] = kk[1];
            }
            else {
                kk.splice(1, 1);
            }

            let hh = kk.join('/');
            window['rootUrl'] = 'http://' + window.location.hostname + ':' + window.location.port + hh;
            return window['rootUrl'];
        }
        else {
            return window['rootUrl'];
        }
    }

    preKey() {
        let kk = window.location.pathname.split('/');
        if (kk.length > 2) {
            return kk[1] + "/";
        }
        else {
            return "";
        }
    }

    runLadenRib(target, imt, rebro) {
        if (typeof this.zzz.ladenRib[imt][rebro] === 'function') {
            this.zzz.ladenRib[imt][rebro](target);
        }
        else if (typeof this.zzz.ladenRib[imt]['otherwise'] === 'function') {
            this.zzz.ladenRib[imt]['otherwise'](target);
        }
    }

    runZZZ(target, imt, rebro) {
        if (this.zzz.ladenRib[imt] != undefined && this.zzz.ladenRib[imt][rebro] != undefined) {
            this.runLadenRib(target, imt, rebro);
        }
        else if (this.zzz.ladenRib[imt] == undefined) {
            if (this.zzz.ladenRib['all'] != undefined && this.zzz.ladenRib['all'][rebro] != undefined) {
                this.runLadenRib(target, 'all', rebro);
            }
        }
    }

    getZZZ(imt, rebro) {
        if (this.zzz.ladenRib[imt] != undefined && this.zzz.ladenRib[imt][rebro] != undefined) {
            if (typeof this.zzz.ladenRib[imt][rebro] === 'function') {
                return this.zzz.ladenRib[imt][rebro](this);
            }
            else if (typeof this.zzz.ladenRib[imt]['otherwise'] === 'function') {
                return this.zzz.ladenRib[imt]['otherwise'](this);
            }
        }
        else {
            return '';
        }
    }

}