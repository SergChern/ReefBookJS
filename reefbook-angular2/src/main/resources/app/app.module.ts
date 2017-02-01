import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent }  from './app.component';
import { AppRouterComponent, routes0 } from './components/app-route/app-route.component';
import { HttpModule } from '@angular/http';

import { MessagesModule, InputTextModule, PasswordModule, ButtonModule, DataTableModule,
    SharedModule, DialogModule} from 'primeng/primeng';

import 'rxjs/add/operator/toPromise';

import { RestService } from './services/rest.service';
import { ViewComponent }   from './components/view/view.component';
import { DotComponent } from './components/dot/dot.component';
import { GridComponent } from './components/grid/grid.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
    imports: [BrowserModule, HttpModule,  FormsModule, ReactiveFormsModule,
        InputTextModule,DataTableModule,ButtonModule,DialogModule,
        RouterModule.forRoot(routes0)],
    declarations: [AppComponent, AppRouterComponent, ViewComponent, DotComponent,
        GridComponent, RowComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, RestService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
