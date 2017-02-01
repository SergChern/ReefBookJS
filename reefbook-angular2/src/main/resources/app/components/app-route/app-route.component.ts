import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Response} from '@angular/http';
import { RestService } from '../../services/rest.service';
import { CommonBase } from '../../shared/common-base';
import {DotComponent} from '../dot/dot.component';
import { ViewComponent }   from '../view/view.component';

@Component({
    moduleId: module.id,
    selector: 'my-app-route',
    templateUrl: 'app-route.component.html',
    styleUrls: ['app-route.component.css']
})

export class AppRouterComponent extends DotComponent {
    routes:any;
    data0 = "";

    constructor(public router:Router, public activateRoute:ActivatedRoute, public restService:RestService) {
        super(router, activateRoute, restService);
        this.imt = '000';
    }

    initekrsuccess(jsonData:JSON) {
        super.initekrsuccess(jsonData);

        //+    $.find('title')[0].text = this.ekr.title;
        this.routes = [];
        this.restService.takeOnUrl(this.url).subscribe((res:Response) => {
                let xhr = res.json();

                let prekey = this.commonBase.preKey();
                for (var m in xhr) {
                    this.data0 += xhr[m].rowTag;
                    let keyroute = prekey + xhr[m].key;
                    this.routes.push({path: keyroute, component: xhr[m].item});
                    this.ekr[keyroute] = {};
                    this.ekr[keyroute].elEkr = xhr[m].elekr;
                    this.ekr[keyroute].imt = xhr[m].imt;
                    this.ekr[keyroute].shrtCut = xhr[m].shrtCut;
                }
                //   this.initfunction();

            },
                error => {
                console.log(error);
            });
    }


}
export const routes0:Routes = [
    {path: 'item/:id', component: ViewComponent, pathMatch: 'full'},
    {path: '**', component: ViewComponent}
]
