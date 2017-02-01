"use strict";
var zzz_1 = require("./zzz");
var CommonBase = (function () {
    function CommonBase() {
        this.zzz = new zzz_1.ZZZ();
    }
    CommonBase.prototype.urlRoot = function () {
        if (window['rootUrl'] === undefined) {
            var kk = window.location.pathname.split('/');
            if (kk.length > 2) {
                kk[2] = kk[1];
            }
            else {
                kk.splice(1, 1);
            }
            var hh = kk.join('/');
            window['rootUrl'] = 'http://' + window.location.hostname + ':' + window.location.port + hh;
            return window['rootUrl'];
        }
        else {
            return window['rootUrl'];
        }
    };
    CommonBase.prototype.preKey = function () {
        var kk = window.location.pathname.split('/');
        if (kk.length > 2) {
            return kk[1] + "/";
        }
        else {
            return "";
        }
    };
    CommonBase.prototype.runLadenRib = function (target, imt, rebro) {
        if (typeof this.zzz.ladenRib[imt][rebro] === 'function') {
            this.zzz.ladenRib[imt][rebro](target);
        }
        else if (typeof this.zzz.ladenRib[imt]['otherwise'] === 'function') {
            this.zzz.ladenRib[imt]['otherwise'](target);
        }
    };
    CommonBase.prototype.runZZZ = function (target, imt, rebro) {
        if (this.zzz.ladenRib[imt] != undefined && this.zzz.ladenRib[imt][rebro] != undefined) {
            this.runLadenRib(target, imt, rebro);
        }
        else if (this.zzz.ladenRib[imt] == undefined) {
            if (this.zzz.ladenRib['all'] != undefined && this.zzz.ladenRib['all'][rebro] != undefined) {
                this.runLadenRib(target, 'all', rebro);
            }
        }
    };
    CommonBase.prototype.getZZZ = function (imt, rebro) {
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
    };
    return CommonBase;
}());
exports.CommonBase = CommonBase;
//# sourceMappingURL=common-base.js.map