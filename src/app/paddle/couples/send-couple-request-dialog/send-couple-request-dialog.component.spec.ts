import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCoupleRequestDialogComponent } from './send-couple-request-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('SendCoupleRequestDialogComponent', () => {
  let component: SendCoupleRequestDialogComponent;
  let fixture: ComponentFixture<SendCoupleRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ SendCoupleRequestDialogComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCoupleRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
