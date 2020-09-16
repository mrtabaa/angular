import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value) {
      return null;
    }

    return limit ? value.substr(0, limit) : value.substr(0, 50);

    // OR
    const actualLimit: number = limit ? limit : 10;
    return value.substr(0, actualLimit);
  }

}
