import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RestService } from '../../services/rest.service';
import {Subscription} from 'rxjs/Subscription';
import { Response} from '@angular/http';
import { CommonBase } from '../../shared/common-base';
import { NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'row-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
    <form form #myForm="ngForm" novalidate (ngSubmit)="submit()">
    <h3  *ngIf="rowModel.id == undefined">Новая запись</h3>
    <h3  *ngIf="rowModel.id !=  undefined">Редактирование записи</h3>
    <div *ngFor="let ctrl of ekrRow.formcontrols"  class="form-group" >
        <label>{{ctrl.label}}</label>
        <input class="form-control" name={{ctrl.name}} [(ngModel)]="rowModel[ctrl.name]" required />
    </div>

    <div class="form-group">
       <button *ngFor="let but of ekrRow.button" type="button" pButton
                  [icon]="but.icon" style="float:left" (click)="clickButton($event)"
                  [label]="but.label" [id]="but.click">

    </button>
<button type="button" pButton class="btn btn-default" [disabled]="myForm.invalid"
                  icon="fa fa-floppy-o" style="float:left" (click)="submit()"
                  label="Save" >

    </button>

    </div>
</form>
    `
})
export class RowComponent implements OnInit {
    @Input() rowModel:any;
    @Input() ekrRow:JSON;
    @Input() imt:String;
    @Input() collectionFromGrid:any;

    @Output() onDisplayRow = new EventEmitter<boolean>();

    cancel() {
        this.onDisplayRow.emit(false);
    }

    ekr:JSON;
    rootUrl:string;
    commonBase:CommonBase = new CommonBase();

    constructor(public restService:RestService) {
    }

    ngOnInit() {
        this.rootUrl = this.collectionFromGrid.model.urlRoot();
    }

    clickButton(event) {
        let id = event.currentTarget.id;
        this.commonBase.runZZZ(this, 'all', id);
    }

    submit() {
        if (this.rowModel.id == undefined) {
            this.restService.addModel(this.rootUrl + "ins", this.rowModel)
                .subscribe((res:Response) => {
                    this.collectionFromGrid.xhr.push(res.json());
                },
                    error => console.log(error)
            );
        }
        else {
            this.restService.putModel(this.rootUrl + "/id=" + this.rowModel.id, this.rowModel)
                .subscribe((res:Response) => {
                    for (var key in res) {
                        this.rowModel[key] = res[key];
                    }
                },
                    error => console.log(error)
            );
        }

        this.cancel();
    }
}