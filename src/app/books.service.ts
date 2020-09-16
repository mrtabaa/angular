import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return ['book1', 'book2', 'book3', 'book4'];
  }
}
