import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CouplesComponent} from './couples.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA, Type} from "@angular/core";
import {Couple} from "../../shared/models/couple.model";
import {CoupleState} from "../../shared/models/couplestate.model";
import {Gender} from "../../shared/models/gender.model";
import {CouplesService} from "./couples.service";
import {of} from "rxjs";
import {SendCoupleRequestDialogComponent} from "./send-couple-request-dialog/send-couple-request-dialog.component";
import {PendingCoupleRequestsDialogComponent} from "./pending-couple-requests-dialog/pending-couple-requests-dialog.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonMethods} from "../../shared/common-methods";
import {DatePipe} from "@angular/common";

const COUPLES: Couple[] =[
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player1@player.com",playerName:"Juan",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player1@player.com",playerName:"Juan",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
]

describe('CouplesComponent', () => {
  let component: CouplesComponent;
  let mockService: CouplesService;
  let fixture: ComponentFixture<CouplesComponent>;
  let datePipe = new DatePipe('en');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        CouplesComponent,
        SendCoupleRequestDialogComponent,
        PendingCoupleRequestsDialogComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplesComponent);
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get<CouplesService>(CouplesService as Type<CouplesService>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set couples property with the items returned from server',()=>{
    const consolidated_couples = new Array<Couple>(COUPLES[0],COUPLES[1]);
    spyOn(mockService, 'get').and.callFake(()=> {
      return of(COUPLES);
    });

    component.ngOnInit();
    expect(component.couples).toEqual(consolidated_couples);
  });

  it('should open send couple requests', () => {
    component.openSendCoupleRequest();
    fixture.detectChanges();
    const title = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLHeadElement>;
    expect(title[0].innerText).toEqual('SEND COUPLE REQUEST');
    const emailLabel = document.getElementsByTagName('label') as HTMLCollectionOf<HTMLLabelElement>;
    expect(emailLabel[0].innerText).toEqual('Email of the player');
  });

  it('should open pending couple requests', () => {
    component.openPendingCoupleRequests();
    fixture.detectChanges();
    const title = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLHeadElement>;
    expect(title[0].innerText).toEqual('PENDING COUPLE REQUESTS');
  });

  it('should test the table', (done)=>{
    component.couples=COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(20);

      expect(allP[0].innerHTML).toEqual('player1@player.com');
      expect(allP[1].innerHTML).toEqual('Juan');
      expect(allP[2].innerHTML).toEqual('admin@admin.com');
      expect(allP[3].innerHTML).toEqual('Diego Lusquiños Otero');
      expect(datePipe.transform(allP[4].innerHTML,'yyyy-MM-dd')).toEqual(CommonMethods.getTodayDate());
      done();
    });
  });

});
