import { ErrorHandler, Injectable } from '@angular/core';

// GLOBAL
@Injectable()
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        alert('An unexpected error occured.');
    }
}

// LOCAL
export class AppError {
    constructor(public originalError?: any) { }
}

// error 0
export class UnavailableError extends AppError { }

// error 400
export class BadInputError extends AppError { }

// error 404
export class NotFoundError extends AppError { }

// error 500
export class InternalServerError extends AppError { }
