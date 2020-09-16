import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleMaker'
})
export class TitleMakerPipe implements PipeTransform {

  phrase: string;

  transform(userInput: string): any {
    if (!userInput) {
      return null;
    }

    const words: string[] = userInput.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i > 0 && this.isProposition(words[i])) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = this.toUpper(words[i]);
      }
    }

    return words.join(' ');
  }

  private toUpper(word: string): string {
    word = word.substr(0, 1).toUpperCase() + word.substr(1);
    return word;
  }

  private isProposition(word: string): boolean {
    const propositions: string[] = ['the', 'of', 'in', 'on', 'out', 'is', 'are', 'and', 'a'];
    if (propositions.includes(word.toLowerCase())) {
      return true;
    }
  }
}
