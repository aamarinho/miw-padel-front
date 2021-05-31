import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookingDateComponent} from './booking-date.component';
import {DatePipe} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";

describe('BookingDateComponent', () => {
  let component: BookingDateComponent;
  let fixture: ComponentFixture<BookingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule
      ],
      declarations: [ BookingDateComponent ],
      providers: [DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit on click', ()=>{
    spyOn(component.newItemEvent, 'emit');
    component.date = new Date(1622448684000);
    const button = fixture.nativeElement.querySelector('input');
    button.dispatchEvent(new Event('dateChange'));

    fixture.detectChanges();
    expect(component.newItemEvent.emit).toHaveBeenCalledWith('2021-05-31');
  })

});
