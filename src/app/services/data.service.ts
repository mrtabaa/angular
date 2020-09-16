import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
    AppError, UnavailableError, NotFoundError,
    BadInputError, InternalServerError
} from '../common/app-errors-handlers';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private url: string, private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.url)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    create(input): Observable<any> {
        //  return throwError(new AppError()); //to cause error temproraly for a test.
        return this.http.post(this.url, input)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    updatePut(input, updatedResource): Observable<any> {
        return this.http.put(this.url + '/' + input.id, updatedResource)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    updatePatch(input, updatedResource): Observable<any> {
        return this.http.patch(this.url + '/' + input.id, updatedResource)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    delete(input): Observable<any> {
        //  return throwError(new AppError()); //to cause error temproraly for a test.
        return this.http.delete(this.url + '/' + input.id)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
    }

    // check error number
    private handleError(error: HttpErrorResponse) {
        switch (error.status) {
            case 0:
                return throwError(new UnavailableError(error));
            case 400:
                return throwError(new BadInputError(error));
            case 404:
                return throwError(new NotFoundError(error));
            case 500:
                return throwError(new InternalServerError(error));
            default:
                return throwError(new AppError(error));
        }
    }
}
