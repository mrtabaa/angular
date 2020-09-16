import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { PasswordsValidators } from './passwords.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required, PasswordsValidators.checkUniquePassword],
      newAndConfirm: fb.group({
        newPass: ['', Validators.required, ],
        confirmPass: ['', Validators.required]
      },
        { validator: PasswordsValidators.matchPasswords }
      )
    });
  }

  get OldPass(): AbstractControl {
    return this.form.get('oldPass');
  }

  get NewPass() {
    return this.form.get('newAndConfirm.newPass');
  }

  get ConfirmPass() {
    return this.form.get('newAndConfirm.confirmPass');
  }

  get NewAndConfirm() {
    return this.form.get('newAndConfirm');
  }
}
