
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RegisterComponent } from "./register/register.component";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import {DatePipe} from "@angular/common";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatMenuModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [
        HomeComponent,
        RegisterComponent
      ],
      providers: [DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should call register', () => {
    component.register();
    fixture.detectChanges();
    const firstName = document.getElementById('register_first_name') as HTMLHeadElement;
    expect(firstName.innerText).toEqual('First name');
    const familyName = document.getElementById('register_family_name') as HTMLHeadElement;
    expect(familyName.innerText).toEqual('Family name');
    const email = document.getElementById('register_email') as HTMLHeadElement;
    expect(email.innerText).toEqual('Email');
    const gender = document.getElementById('register_gender') as HTMLHeadElement;
    expect(gender.innerText).toEqual('Gender');
    const birthDate = document.getElementById('register_birth_date') as HTMLHeadElement;
    expect(birthDate.innerText).toEqual('Birth date');
    const password = document.getElementById('register_password') as HTMLHeadElement;
    expect(password.innerText).toEqual('Password');
  });

  it('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
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

