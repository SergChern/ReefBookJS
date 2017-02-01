import { Http } from '@angular/http';
export declare class AppRouterComponent {
    private http;
    name: string;
    constructor(http: Http);
    ngOnInit(): void;
    getHeroes(): void;
    initekrsuccess(response: any): void;
}
