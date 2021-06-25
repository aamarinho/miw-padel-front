import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddLeagueComponent} from './add-league.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogRef} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Gender} from "../../../shared/models/gender.model";

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
        { provide: MatDialogRef, useValue: {} },
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

    gender.setValue(Gender.MIXED);
    expect(gender.hasError('required')).toBeFalsy();
  });

  it('max Couples field validity', () => {
    let maxCouples = component.form.controls['maxCouples'];
    expect(maxCouples.valid).toBeFalsy();

    maxCouples.setValue("");
    expect(maxCouples.hasError('required')).toBeTruthy();

    maxCouples.setValue(1);
    expect(maxCouples.hasError('min')).toBeTruthy();

    maxCouples.setValue(22);
    expect(maxCouples.hasError('required')).toBeFalsy();
    expect(maxCouples.hasError('min')).toBeFalsy();
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

  it('form valid when create', ()=>{
    component.form.controls['name'].setValue('name');
    component.form.controls['gender'].setValue(Gender.FEMALE)
    component.form.controls['maxCouples'].setValue(1);
    component.form.controls['startDate'].setValue('2022-06-03');
    component.form.controls['endDate'].setValue('2022-06-30');
    expect(component.form.valid).toBeFalsy();
    component.form.controls['maxCouples'].setValue(10);
    component.submit();
    expect(component.form.valid).toBeTruthy();
  });

});
