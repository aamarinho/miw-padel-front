import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CouplesLeagueComponent} from './couples-league.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Gender} from "../../../shared/models/gender.model";
import {Couple} from "../../../shared/models/couple.model";
import {CoupleState} from "../../../shared/models/couplestate.model";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

const COUPLES: Couple[] = [
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player3@player.com",playerName:"Juan Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Perico Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrés Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Andrea Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Misil Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
];

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
    component.couples=COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(21);

      expect(allP[0].innerHTML).toEqual('COUPLES');
      expect(allP[1].innerHTML).toEqual('player3@player.com');
      expect(allP[2].innerHTML).toEqual('Juan Álvarez Mariño');
      expect(allP[3].innerHTML).toEqual('admin@admin.com');
      expect(allP[4].innerHTML).toEqual('Diego Lusquiños Otero');

      done();
    });
  });
});
