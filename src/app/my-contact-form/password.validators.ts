import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

  // Require one uppercase Validator
  static oneUppercaseRequired(userEntry: AbstractControl): ValidationErrors | null {
    let word = userEntry.value as string;
    // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = /[A-Z]/;

    for (let i = 0; i < word.length; i++) {
      if (letters.test(word[i]))
        return null;
    }
    return { oneUppercaseRequired: true };
  }

  // Require one special char Validator
  static oneSpecialCharRequried(userEntry: AbstractControl): ValidationErrors | null {
    let word = userEntry.value as string;
    let chars = "/:()#$@!%,."

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < chars.length; j++)
        if (word[i] == chars[j])
          return null;
    }
    return { oneSpecialCharIsRequired: true }
  }

  // Require one number Validator
  static oneNumRequired(userEntry: AbstractControl): ValidationErrors | null {
    let phrase = userEntry.value as string;
    let nums = "1234567890";

    for (let i = 0; i < phrase.length; i++) {
      for (let j = 0; j < nums.length; j++)
        if (phrase[i] == nums[j])
          return null;
    }
    return { oneNumberIsRequired: true };
  }
}
