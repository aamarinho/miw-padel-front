import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from "./register/register.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatMenuModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'miw-padel-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('miw-padel-front');
  });

  it('should call login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.login();
    fixture.detectChanges();
    const email = document.getElementById('login_email') as HTMLHeadElement;
    expect(email.getAttribute('placeholder')).toEqual('Email');
    const password = document.getElementById('login_password') as HTMLHeadElement;
    expect(password.getAttribute('placeholder')).toEqual('Password');
  });

  it('should call register', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.register();
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

});
