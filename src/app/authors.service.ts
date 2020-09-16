import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ['Author1', 'Author2', 'Author3'];
  }
  getImage() {
    return 'https://tineye.com/images/imageurl-firefox.png';
  }

  getText(): string {
    return `What if you can't stand your partner, now that you're in lockdown together and can no longer ignore their annoying traits? Or worse - what if you broke up just before the order to stay at home, and are now awkwardly stuck under the same roof?

    If you're lucky enough to work from home, how do you deal with difficult children - or a boss who likes to micromanage you remotely?

    What if you still have to go in to work - and your boss won't let you wear a mask?

    What if your parents are driving you crazy ?

      Or what if you just feel really lonely ?

        For decades, advice columnists - or "agony aunts" - have been the go - to place for people wanting to ask for advice anonymously.Now, the crisis means some columnists are getting more queries - and the questions have become more serious and urgent.`;
  }
  constructor() { }
}
