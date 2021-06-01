import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateLeagueComponent } from './add-update-league.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AddUpdateLeagueComponent', () => {
  let component: AddUpdateLeagueComponent;
  let fixture: ComponentFixture<AddUpdateLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [ AddUpdateLeagueComponent ],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        DatePipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
