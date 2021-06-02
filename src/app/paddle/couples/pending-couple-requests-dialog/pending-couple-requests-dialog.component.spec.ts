import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PendingCoupleRequestsDialogComponent} from './pending-couple-requests-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Couple} from "../../../shared/models/couple.model";
import {CoupleState} from "../../../shared/models/couplestate.model";
import {Gender} from "../../../shared/models/gender.model";

const COUPLES: Couple[] =[
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player1@player.com",playerName:"Juan",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player1@player.com",playerName:"Juan",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
]
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

  it('should test the name of the couple request', (done)=>{
    component.couples=COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(5);

      expect(allP[0].innerHTML).toEqual('PENDING COUPLE REQUESTS');
      expect(allP[1].innerHTML).toEqual('Diego Lusquiños Otero');
      done();
    });
  });
});
