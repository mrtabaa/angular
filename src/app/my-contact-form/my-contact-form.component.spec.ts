import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactFormComponent } from './my-contact-form.component';

describe('MyContactFormComponent', () => {
  let component: MyContactFormComponent;
  let fixture: ComponentFixture<MyContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
