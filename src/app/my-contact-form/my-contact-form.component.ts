import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyUsernameValidators } from './my-username.validators';


@Component({
  selector: 'my-contact-form',
  templateUrl: './my-contact-form.component.html',
  styleUrls: ['./my-contact-form.component.css'],
})
export class MyContactFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const i = this.topics.controls.indexOf(topic);
    this.topics.removeAt(i);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
