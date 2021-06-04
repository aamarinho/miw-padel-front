import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CouplesLeagueComponent} from './couples-league.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Common} from "../../../shared/common";

describe('CouplesLeagueComponent', () => {
  let component: CouplesLeagueComponent;
  let fixture: ComponentFixture<CouplesLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
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
    component.couples = Common.CONSOLIDATED_COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(17);

      expect(allP[0].innerHTML).toEqual('COUPLES');
      expect(allP[1].innerHTML).toEqual('player2@player.com');
      expect(allP[2].innerHTML).toEqual('Player2 player2');
      expect(allP[3].innerHTML).toEqual('player@player.com');
      expect(allP[4].innerHTML).toEqual('Player player');

      done();
    });
  });
});
