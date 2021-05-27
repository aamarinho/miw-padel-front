import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PaddleCourtAvailabilityComponent} from './paddle-court-availability.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {PaddleCourtAvailabilityDto} from "../../../../shared/models/paddlecourtavailabilitydto.model";

describe('PaddleCourtComponent', () => {
  let component: PaddleCourtAvailabilityComponent;
  let fixture: ComponentFixture<PaddleCourtAvailabilityComponent>;

  const availabilityHours = new Map([
    ["10:00 - 12:00", true],
    ["12:00 - 14:00", false],
  ])
  const paddleCourtAvailabilityDto: PaddleCourtAvailabilityDto =
    {name:'Paddle Court 3',date:new Date(),availabilityHours}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      declarations: [ PaddleCourtAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddleCourtAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table', (done)=> {
    component.paddleCourtAvailabilityDto = paddleCourtAvailabilityDto;
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let title = fixture.nativeElement.querySelectorAll('p');
      expect(title[0].textContent).toEqual('Paddle Court 3')

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(3);

      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('INITIAL HOUR');
      expect(headerRow.cells[1].innerHTML).toBe('END HOUR');

      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toEqual('10:00');
      expect(row1.cells[1].innerHTML).toEqual('12:00');

      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toEqual('12:00');
      expect(row2.cells[1].innerHTML).toEqual('14:00');

      done();
    });
  });

});
