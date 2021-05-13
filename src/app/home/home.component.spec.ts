
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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

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
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call register', () => {
    const fixture = TestBed.createComponent(HomeComponent);
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

