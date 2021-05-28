import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PendingCoupleRequestsDialogComponent} from './pending-couple-requests-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('PendingCoupleRequestsDialogComponent', () => {
  let component: PendingCoupleRequestsDialogComponent;
  let fixture: ComponentFixture<PendingCoupleRequestsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
      ],
      declarations: [ PendingCoupleRequestsDialogComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCoupleRequestsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
