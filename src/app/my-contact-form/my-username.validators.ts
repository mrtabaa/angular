import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyUsernameValidators {

  static checkUsernameUnique(userEntry: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userEntry.value == 'reza') {
          resolve({ uniqueUsername: true });
        }
        else {
          resolve(null);
        }
      }, 2000);
    });
  }

}
