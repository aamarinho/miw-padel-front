import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PendingCoupleRequestsDialogComponent} from './pending-couple-requests-dialog.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Common} from "../../../shared/common";

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
    component.couples = Common.PENDING_COUPLES;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let allP = fixture.nativeElement.querySelectorAll('p');
      expect(allP.length).toBe(5);

      expect(allP[0].innerHTML).toEqual('PENDING COUPLE REQUESTS');
      expect(allP[1].innerHTML).toEqual('Player2 player2');
      expect(allP[2].innerHTML).toEqual('Player3 player3');
      expect(allP[3].innerHTML).toEqual('Player4 player4');
      expect(allP[4].innerHTML).toEqual('Player5 player5');
      done();
    });
  });
});
