import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPaddleCourtComponent } from './booking-paddle-court.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BookingPaddlecourtComponent', () => {
  let component: BookingPaddleCourtComponent;
  let fixture: ComponentFixture<BookingPaddleCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
      ],
      declarations: [ BookingPaddleCourtComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPaddleCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the name of the couple request', (done)=>{
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let title = fixture.nativeElement.querySelectorAll('p');
      expect(title.length).toBe(1);

      expect(title[0].innerHTML).toEqual('BOOK A PADDLE COURT');
      done();
    });
  });
});
