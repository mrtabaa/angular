import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'books'
})
export class BooksPipe implements PipeTransform {

  transform(book: string): any {
    if (!book) {
      return null;
    }

    return book.toUpperCase();
  }

}
