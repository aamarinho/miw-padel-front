import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {RegisterComponent} from "./register/register.component";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
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

  it('should open register', () => {
    component.register();
    fixture.detectChanges();
    const labels = document.getElementsByTagName('mat-label') as HTMLCollectionOf<HTMLLabelElement>;
    expect(labels[0].innerText).toEqual('First name');
    expect(labels[1].innerText).toEqual('Family name');
    expect(labels[2].innerText).toEqual('Email');
    expect(labels[3].innerText).toEqual('Gender');
    expect(labels[4].innerText).toEqual('Birth date');
    expect(labels[5].innerText).toEqual('Password');
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

