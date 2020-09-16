import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordsValidators {
    static checkUniquePassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                control.value == '1234' ? resolve(null) : resolve({ isPasswordUnique: true });
            });
        });
    }

    static matchPasswords(control: AbstractControl): ValidationErrors | null {
        const newPass = control.get('newPass');
        const confirmPass = control.get('confirmPass');

        if (newPass.value != confirmPass.value) {
            return { passwordsNotMatched: true };
        }

        return null;
    }
}
