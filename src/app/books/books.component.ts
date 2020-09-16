import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: string[];
  isActive = false;

  myValues = new FromBooks();

  @Input('isFavorite') isSelected: boolean;
  @Output('change') result = new EventEmitter();

  constructor(service: BooksService) {
    this.books = service.getBooks();
    this.myValues.messages = 'this is my message to be passed';
    this.myValues.numbers = 169;
  }

  email = 'me@email.com';

  onSave() {
    console.log(this.email);
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.result.emit({ newArg: this.myValues });
  }

  ngOnInit(): void {
  }
}

export class FromBooks {
  messages: string;
  numbers: number;
}
