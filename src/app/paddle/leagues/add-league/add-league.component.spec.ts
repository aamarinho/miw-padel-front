import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddLeagueComponent} from './add-league.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AddLeagueComponent', () => {
  let component: AddLeagueComponent;
  let fixture: ComponentFixture<AddLeagueComponent>;

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
      declarations: [ AddLeagueComponent ],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        DatePipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();

    name.setValue("Valid name");
    expect(name.hasError('required')).toBeFalsy();
  });

  it('gender field validity', () => {
    let gender = component.form.controls['gender'];
    expect(gender.valid).toBeFalsy();

    gender.setValue("");
    expect(gender.hasError('required')).toBeTruthy();

    gender.setValue("Valid gender");
    expect(gender.hasError('required')).toBeFalsy();
  });

  it('max Couples field validity', () => {
    let maxCouples = component.form.controls['maxCouples'];
    expect(maxCouples.valid).toBeFalsy();

    maxCouples.setValue("");
    expect(maxCouples.hasError('required')).toBeTruthy();

    maxCouples.setValue(22);
    expect(maxCouples.hasError('required')).toBeFalsy();
  });

  it('start date field validity', () => {
    let startDate = component.form.controls['startDate'];
    expect(startDate.valid).toBeFalsy();

    startDate.setValue("");
    expect(startDate.hasError('required')).toBeTruthy();

    startDate.setValue("22/02/2021");
    expect(startDate.hasError('required')).toBeFalsy();
  });

  it('end date field validity', () => {
    let endDate = component.form.controls['endDate'];
    expect(endDate.valid).toBeFalsy();

    endDate.setValue("");
    expect(endDate.hasError('required')).toBeTruthy();

    endDate.setValue("22/03/2021");
    expect(endDate.hasError('required')).toBeFalsy();
  });
});
