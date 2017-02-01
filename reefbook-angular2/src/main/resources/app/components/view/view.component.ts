import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RestService } from '../../services/rest.service';
import {DotComponent} from '../dot/dot.component';
import {Subscription} from 'rxjs/Subscription';
import { Response} from '@angular/http';

@Component({
    selector: 'view-app',
    template: `
    <div id="example">
    <h3  *ngIf="nameNotFoundComp!=''">{{nameNotFoundComp}}</h3>
    <div *ngIf="nameNotFoundComp==''" id="ekr0">{{initTemplate}}
        <grid-app *ngIf="grid.columns!=undefined"></grid-app>
    </div>
</div>
    `
})
export class ViewComponent extends DotComponent {

    constructor(public router: Router, public activateRoute: ActivatedRoute, public restService:RestService) {
        super(router, activateRoute, restService);
    }

    initekrsuccess(jsonData:JSON) {
        super.initekrsuccess(jsonData);
    }

}