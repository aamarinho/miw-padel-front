import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookingsComponent} from './bookings.component';
import {BookingDto} from "../../shared/models/bookingdto.model";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Common} from "../../shared/common";
import {DatePipe} from "@angular/common";

describe('BookingsComponent', () => {
  const myBookings: BookingDto[] = [
    {id:'',email:"player@player.com",paddleCourtName:"Paddle Court 2",date:new Date(),timeRange:"12:00-14:00"},
    {id:'',email:"player@player.com",paddleCourtName:"Paddle Court 4",date:new Date(),timeRange:"16:00-18:00"},
  ];
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;
  let datePipe = new DatePipe('en');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      declarations: [ BookingsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table', (done)=>{
    component.dataSource=new MatTableDataSource(myBookings);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(3);

      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('PADDLE COURT');
      expect(headerRow.cells[1].innerHTML).toBe('DATE');
      expect(headerRow.cells[2].innerHTML).toBe('TIME RANGE');

      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toEqual('Paddle Court 2');
      expect(datePipe.transform(row1.cells[1].innerHTML,'yyyy-MM-dd')).toEqual(Common.getTodayDate());
      expect(row1.cells[2].innerHTML).toEqual('12:00-14:00');

      done();
    });
  });

});
