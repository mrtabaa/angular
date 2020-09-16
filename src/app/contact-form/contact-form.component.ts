import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor() {}

  categories = [
    { id: 1, name: 'Development' },
    { id: 1, name: 'Art' },
    { id: 1, name: 'Languages' },
  ];

  submit(_f) {}
}
