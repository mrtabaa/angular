import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {

    constructor(http: HttpClient) {

        // send url and http to the DataService base class's constructor
        super('http://jsonplaceholder.typicode.com/posts', http);
    }
}
