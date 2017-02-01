import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response} from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { RestService } from '../../services/rest.service';
import { CommonBase } from '../../shared/common-base';
import {DotCollection} from '../../collection/dot-collection';

@Component({
    selector: 'not-found-comp',
    template: `<p></p>`
})

export class DotComponent implements OnInit, OnDestroy {
    nameNotFoundComp:String = '';
    imt:String;
    ekr:JSON;
    initTemplate:String;
    grid:any = {};
    rootUrl:String;
    url:string;
    //  count:number = 0;
    collection:DotCollection;
    private subscription:Subscription;

    commonBase:CommonBase = new CommonBase();

    constructor(public router:Router, public activateRoute:ActivatedRoute, public restService:RestService) {
        this.rootUrl = (window['rootUrl'] == undefined) ? this.commonBase.urlRoot() : window['rootUrl'];
        this.subscription = activateRoute.params.subscribe(params=> {
            this.clearComponent(params);
        });
    }

    ngOnInit() {
        this.initDot();
    }

    initDot() {
        if (this.imt != undefined) {
            this.nameNotFoundComp = '';
            if (this.imt == '') return;
            this.commonBase.runZZZ(this, this.imt, 'init');
            //+ _.extend(this, new ShortcutsPlus);
            this.restService.goImt(this.rootUrl, this.imt).subscribe((res:Response) => {
                    let jsonData = res.json();

                    if (jsonData.length != 0) {
                        this.initekrsuccess(jsonData);
                    }
                    else {
                        this.nameNotFoundComp = 'Страница не найдена';
                    }
                },
                    error => {
                    console.log(error);
                });
        }
    }

    clearComponent(params) {
        if (params['id'] != undefined) {
            this.imt = params['id'];
            if (this.grid.columns != undefined) {
                this.grid.columns = undefined;
            }
            this.initDot();
        }
    }

    initekrsuccess(jsonData:JSON) {
        this.fillGoImt(jsonData);
    }

    fillGoImt(jsonData:JSON) {
        for (var row in jsonData) {
            if (jsonData[row].hasOwnProperty("dust")) {
                this.initTemplate = jsonData[row].dust;
            }
            else if (jsonData[row].hasOwnProperty("ekr")) {
                jsonData[row].ekr = jsonData[row].ekr.split('function').join('"function');
                jsonData[row].ekr = jsonData[row].ekr.split('};').join('"');
                this.ekr = JSON.parse(jsonData[row].ekr.toString());
            }
            else if (jsonData[row].grid == undefined) {
                this.grid = {};
            }
            else {
                this.grid = JSON.parse(jsonData[row].grid);
                this.grid = this.grid.grid[0];
            }
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}