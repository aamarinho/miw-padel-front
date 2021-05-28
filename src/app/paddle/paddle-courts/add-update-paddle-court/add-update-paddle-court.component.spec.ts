import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddUpdatePaddleCourtComponent} from './add-update-paddle-court.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PaddleCourtType} from "../../../shared/models/paddlecourttype.model";

describe('AddPaddleCourtComponent', () => {
  let component: AddUpdatePaddleCourtComponent;
  let fixture: ComponentFixture<AddUpdatePaddleCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        NgxMaterialTimepickerModule
      ],
      declarations: [ AddUpdatePaddleCourtComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePaddleCourtComponent);
    component = fixture.componentInstance;
    component.isAdd = true;
    component.ngOnInit();
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

  it('paddle court type field validity', () => {
    let paddleCourtType = component.form.controls['paddleCourtType'];
    expect(paddleCourtType.valid).toBeFalsy();

    paddleCourtType.setValue("");
    expect(paddleCourtType.hasError('required')).toBeTruthy();

    paddleCourtType.setValue(PaddleCourtType.OUTDOOR);
    expect(paddleCourtType.hasError('required')).toBeFalsy();
  });

  it('disabled field validity', () => {
    let disabled = component.form.controls['disabled'];
    expect(disabled.valid).toBeFalsy();

    disabled.setValue("");
    expect(disabled.hasError('required')).toBeTruthy();

    disabled.setValue("TRUE");
    expect(disabled.hasError('required')).toBeFalsy();
  });

  it('form valid when edit', ()=>{
    component.form.controls['name'].setValue('PC 2');
    component.form.controls['disabled'].setValue('TRUE');
    component.update();
    expect(component.form.valid).toBeFalsy();
    component.form.controls['paddleCourtType'].setValue(PaddleCourtType.OUTDOOR);
    expect(component.form.valid).toBeTruthy();
  });

  it('form valid when register', ()=>{
    component.form.controls['name'].setValue('PC 2');
    component.form.controls['paddleCourtType'].setValue(PaddleCourtType.OUTDOOR);
    component.create();
    expect(component.form.valid).toBeFalsy();
    component.form.controls['disabled'].setValue('TRUE');
    expect(component.form.valid).toBeTruthy();
  });

  it('correct data on view when edit', ()=>{
    let startTimes = new Array<string>('12:00','14:00');
    let endTimes = new Array<string>('14:00','16:00');
    component.isAdd = false;
    component.paddleCourt = {
      id: '',
      name: 'PC 2',
      paddleCourtType: PaddleCourtType.INDOOR,
      startTimes: startTimes,
      endTimes: endTimes,
      disabled: false
    }
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.paddleCourt.name).toEqual('PC 2');
    expect(component.paddleCourt.paddleCourtType).toEqual(PaddleCourtType.INDOOR);
    expect(component.paddleCourt.startTimes).toEqual(startTimes);
    expect(component.paddleCourt.endTimes).toEqual(endTimes);
    expect(component.paddleCourt.disabled).toEqual(false);
    expect(component.form.controls['name'].value).toEqual('PC 2');
    expect(component.form.controls['paddleCourtType'].value).toEqual(PaddleCourtType.INDOOR);
    expect(component.form.controls['disabled'].value).toEqual(false);
  });

});
