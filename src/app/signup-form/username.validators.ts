import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static spaceIsNotAllowed(
    userEntry: AbstractControl
  ): ValidationErrors | null {
    if ((userEntry.value as string).includes(' ')) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
}
