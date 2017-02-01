import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response, Headers, RequestOptions  } from '@angular/http';
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

@Injectable()
export class RestService {
    headers:Headers;
    options:RequestOptions;

    constructor(private http:Http) {
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({headers: this.headers});
        // 'Accept': 'q=0.8;application/json;q=0.9' }
    }

    takeOnUrl(url:string) {
        return this.http.get(url);
    }

    goImt(url:String, imt:String) {
        return this.http.get(url + "/go/" + imt);
    }

    putModel(url:string, model:any):Observable<any> {
        return this.http.put(url, JSON.stringify(model), this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteModel(url:string):Observable<any> {
        return this.http.delete(url, this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addModel(url:string, model:any):Observable<any> {
        return this.http.post(url, JSON.stringify(model), this.options);
    }

}