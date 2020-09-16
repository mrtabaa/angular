import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { stringify } from 'querystring';
import { title } from 'process';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private elRef: ElementRef) {}

  @Input('appInputFormat') format: string;

  @HostListener('blur') onPhoneNum() {
    const userInput: string = this.elRef.nativeElement.value;
    let formattedNum = '';

    // format US phone number
    if (this.format == 'usNum') {
      formattedNum = '(';
      for (let index = 0; index < userInput.length; index++) {
        if (!(index == 2 || index == 5)) { formattedNum += userInput[index]; }
        else if (index == 2) { formattedNum += userInput[index] + ')'; }
        else { formattedNum += userInput[index] + '-'; }
      }
      this.elRef.nativeElement.value = formattedNum;

      // format Iran phone number
    } else if (this.format == 'irNum') {
      for (let index = 0; index < userInput.length; index++) {
        if (index == 2 || index == 5) { formattedNum += userInput[index] + ' '; }
        else { formattedNum += userInput[index]; }
      }

      this.elRef.nativeElement.value = formattedNum;
    }
  }
}
