import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { MyUsernameValidators } from '../my-contact-form/my-username.validators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { UsernameValidator } from '../signup-form/username.validators';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['',
        [Validators.required, Validators.minLength(3)],
        MyUsernameValidators.checkUsernameUnique
      ],

      contact: fb.group({
        phone: [],
        email: ['',
          [Validators.required, UsernameValidator.spaceIsNotAllowed]
        ]
      }),

      phrases: fb.array([])
    });
  }

  get Username() {
    return this.form.get('username');
  }

  get Email() {
    return this.form.get('contact.email');
  }

  addPhrase(phrase: HTMLInputElement) {
    this.Phrases.push(new FormControl(phrase.value));
    phrase.value = '';
  }

  removePhrase(phrase: FormControl) {
    const i = this.Phrases.controls.indexOf(phrase);
    this.Phrases.removeAt(i);
  }

  get Phrases() {
    return this.form.get('phrases') as FormArray;
  }
}
