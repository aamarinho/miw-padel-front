import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [
        RegisterComponent
      ],
      providers: [DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
  });

  it('first name field validity', () => {
    let firstName = component.form.controls['firstName'];
    expect(firstName.valid).toBeFalsy();

    firstName.setValue("");
    expect(firstName.hasError('required')).toBeTruthy();

    firstName.setValue("Valid first name");
    expect(firstName.hasError('required')).toBeFalsy();
  });

  it('family name field validity', () => {
    let familyName = component.form.controls['familyName'];
    expect(familyName.valid).toBeFalsy();

    familyName.setValue("");
    expect(familyName.hasError('required')).toBeTruthy();

    familyName.setValue("Valid family name");
    expect(familyName.hasError('required')).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue("");
    expect(email.hasError('required')).toBeTruthy();

    email.setValue("Invalid email");
    expect(email.hasError('email')).toBeTruthy();

    email.setValue("valid_email@gmail.com");
    expect(email.hasError('required')).toBeFalsy();
    expect(email.hasError('email')).toBeFalsy();
  });

  it('gender field validity', () => {
    let gender = component.form.controls['gender'];
    expect(gender.valid).toBeFalsy();

    gender.setValue("");
    expect(gender.hasError('required')).toBeTruthy();

    gender.setValue("FEMALE");
    expect(gender.hasError('required')).toBeFalsy();
  });

  it('birth date field validity', () => {
    let birthDate = component.form.controls['birthDate'];
    expect(birthDate.valid).toBeFalsy();

    birthDate.setValue("");
    expect(birthDate.hasError('required')).toBeTruthy();

    birthDate.setValue("27/07/1997");
    expect(birthDate.hasError('required')).toBeFalsy();
  });

  it('password field validity', () => {
    let password = component.form.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue("");
    expect(password.hasError('required')).toBeTruthy();

    password.setValue("11");
    expect(password.hasError('minlength')).toBeTruthy();

    password.setValue("More than 14 characters");
    expect(password.hasError('maxlength')).toBeTruthy();

    password.setValue("Valid pass");
    expect(password.hasError('required')).toBeFalsy();
    expect(password.hasError('minlength')).toBeFalsy();
    expect(password.hasError('maxlength')).toBeFalsy();
  });

});
