import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CouplesLeagueComponent} from './couples-league.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Common} from "../../../shared/common";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";

describe('CouplesLeagueComponent', () => {
  let component: CouplesLeagueComponent;
  let fixture: ComponentFixture<CouplesLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {data:Common.CONSOLIDATED_COUPLES} },
      ],
      declarations: [ CouplesLeagueComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplesLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the mat card', (done)=>{
    //component.couples = Common.CONSOLIDATED_COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(17);

      expect(allP[0].innerHTML).toEqual('COUPLES');
      expect(allP[1].innerHTML).toEqual('player@player.com');
      expect(allP[2].innerHTML).toEqual('Player player');
      expect(allP[3].innerHTML).toEqual('player2@player.com');
      expect(allP[4].innerHTML).toEqual('Player2 player2');

      done();
    });
  });
});
