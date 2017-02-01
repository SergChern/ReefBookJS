import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RestService } from '../../services/rest.service';
import {DotComponent} from '../dot/dot.component';
import {Subscription} from 'rxjs/Subscription';
import { Response} from '@angular/http';
import {InputTextModule, DataTable, Column, SelectItem, MultiSelectModule,
    ButtonModule, DialogModule} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'grid-app',
    template: `
<div *ngIf="!displayRow">
    <div class="ui-widget-header" style="padding:4px 10px;border-bottom: 0 none">
        <i class="fa fa-search" style="margin:4px 4px 0 0"></i>
        <input #gb type="text" pInputText size="50" placeholder="Global Filter">
    </div>

    <div>
        <p-dataTable [value]="collection.xhr" selectionMode="single" [(selection)]="selectedModel"
                     [rows]="20" [paginator]="true" [pageLinks]="3" [rowsPerPageOptions]="[5,10,20]"
                     sortMode="multiple" resizableColumns="true" scrollHeight="350px"
                     [editable]="true" [globalFilter]="gb" #dt>
            <header>{{grid.header}}</header>
            <p-headerColumnGroup *ngIf="grid.prow.length > 0">
                <p-row *ngFor="let col0 of grid.prow">
                    <p-column *ngFor="let col1 of col0" [header]="col1.header" [rowspan]="col1.rowspan"
                              [colspan]="col1.colspan">
                    </p-column>
                </p-row>
            </p-headerColumnGroup>
            <div *ngIf="grid.prow.length > 0">
                <p-column *ngFor="let col of grid.columns" [field]="col.name">
                </p-column>
            </div>
            <div *ngIf="grid.prow.length == 0">
                <p-column *ngFor="let col of grid.columns" [field]="col.name" [header]="col.label"
                          [sortable]="col.sortable" [editable]="col.editable"
                          [filter]="col.filter" filterPlaceholder="Search">
                </p-column>
            </div>
            <footer>
                <div class="ui-helper-clearfix" style="width:100%">
                    <button *ngFor="let but of grid.button" type="button" pButton
                            [icon]="but.icon" style="float:left" (click)="clickButton($event)"
                            [label]="but.label" [id]="but.click">
                    </button>
                </div>
            </footer>
        </p-dataTable>
    </div>
</div>
<row-app *ngIf="displayRow" [rowModel]="rowModel" [ekrRow]="ekrRow" [imt]="ekr.imtRow"
           [collectionFromGrid]= "collection" (onDisplayRow)="onDisplayRow($event)">
</row-app>
    `
})
export class GridComponent extends DotComponent {
    selectedModel = this.collection.model;
    rowModel:any;
    displayRow:boolean = false;
    ekrRow:JSON;

    constructor(public router:Router, public activateRoute:ActivatedRoute, public restService:RestService) {
        super(router, activateRoute, restService);
    }

    initDot() {
        super.initDot();

        this.grid.prow = [];

        if (this.url != null) {
            this.restService.takeOnUrl(this.url).subscribe((res:Response) => {
                    this.collection.xhr = res.json();
                },
                    error => {
                    console.log(error);
                });
        }

    }

    goEkrRow(self) {
        self.nameNotFoundComp = '';
        //+ _.extend(this, new ShortcutsPlus);
        self.restService.goImt(self.rootUrl, self.ekr.imtRow).subscribe((res:Response) => {
                let jsonData = res.json();

                if (jsonData.length != 0) {
                    for (var row in jsonData) {
                        if (jsonData[row].hasOwnProperty("ekr")) {
                            jsonData[row].ekr = jsonData[row].ekr.split('function').join('"function');
                            jsonData[row].ekr = jsonData[row].ekr.split('};').join('"');
                            self.ekrRow = JSON.parse(jsonData[row].ekr.toString());
                        }
                    }
                    self.displayRow = true;
                }
                else {
                    self.nameNotFoundComp = 'Страница не найдена';
                }
            },
                error => {
                console.log(error);
            });
    }

    clickButton(event) {
        let id = event.currentTarget.id;
        this.commonBase.runZZZ(this, 'all', id);
    }

    onDisplayRow(increased) {
        this.displayRow = increased;
        this.router.navigate(['/item/' + this.imt]);
    }

    findSelectedIndex(self):number {
        return self.collection.xhr.indexOf(self.selectedModel);
    }
}