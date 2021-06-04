import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LeaguesComponent} from './leagues.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Gender} from "../../shared/models/gender.model";
import {Common} from "../../shared/common";
import {DatePipe} from "@angular/common";

describe('LeaguesComponent', () => {
  let component: LeaguesComponent;
  let fixture: ComponentFixture<LeaguesComponent>;
  let datePipe = new DatePipe('en');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        MatTableModule
      ],
      declarations: [ LeaguesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table', (done)=>{
    component.dataSource = Common.LEAGUES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(3);

      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('NAME');
      expect(headerRow.cells[1].innerHTML).toBe('GENDER');
      expect(headerRow.cells[2].innerHTML).toBe('MAX COUPLES');
      expect(headerRow.cells[3].innerHTML).toBe('START DATE');
      expect(headerRow.cells[4].innerHTML).toBe('END DATE');
      expect(headerRow.cells[5].innerHTML).toBe('-');

      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toEqual('First League');
      expect(row1.cells[1].innerHTML).toEqual(Gender.FEMALE);
      expect(row1.cells[2].innerHTML).toEqual('20');
      expect(datePipe.transform(row1.cells[3].innerHTML,'yyyy-MM-dd')).toEqual(Common.getTodayDate());
      expect(datePipe.transform(row1.cells[4].innerHTML,'yyyy-MM-dd')).toEqual(Common.getTodayDate());

      done();
    });
  });
});
