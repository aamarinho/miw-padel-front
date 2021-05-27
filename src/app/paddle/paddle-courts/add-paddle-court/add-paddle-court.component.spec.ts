import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AddPaddleCourtComponent} from './add-paddle-court.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PaddleCourtType} from "../../../shared/models/paddlecourttype.model";

describe('AddPaddleCourtComponent', () => {
  let component: AddPaddleCourtComponent;
  let fixture: ComponentFixture<AddPaddleCourtComponent>;

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
      declarations: [ AddPaddleCourtComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaddleCourtComponent);
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

});
