import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PaddleCourtsComponent} from './paddle-courts.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {of} from "rxjs";
import {PaddleCourtService} from "./paddle-court.service";
import {CUSTOM_ELEMENTS_SCHEMA, Type} from "@angular/core";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";
import {PaddleCourtType} from "../../shared/models/paddlecourttype.model";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddUpdatePaddleCourtComponent} from "./add-update-paddle-court/add-update-paddle-court.component";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";

const STARTTIMES: string[]= [ "12:00","14:00" ]
const ENDTIMES: string[]= [ "14:00","16:00" ]

const PADDLECOURTS: PaddleCourt[] = [
  {id:'1',name:'PC 1',paddleCourtType:PaddleCourtType.OUTDOOR,startTimes:STARTTIMES,endTimes:ENDTIMES,disabled:false},
  {id:'2',name:'PC 2',paddleCourtType:PaddleCourtType.INDOOR,startTimes:STARTTIMES,endTimes:ENDTIMES,disabled:true},
]

describe('PaddleCourtsComponent', () => {
  let component: PaddleCourtsComponent;
  let fixture: ComponentFixture<PaddleCourtsComponent>;
  let mockService: PaddleCourtService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        MatTableModule,
        BrowserAnimationsModule,
        NgxMaterialTimepickerModule
      ],
      declarations: [ PaddleCourtsComponent,AddUpdatePaddleCourtComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddleCourtsComponent);
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get<PaddleCourtService>(PaddleCourtService as Type<PaddleCourtService>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dataSource property with the items returned from server',()=>{
    spyOn(mockService, 'get').and.callFake(()=> {
      return of(PADDLECOURTS);
    });

    component.ngOnInit();

    expect(component.dataSource).toEqual(PADDLECOURTS);
  });

  it('should open add dialog',()=>{
    component.openAddPaddleCourt();
    fixture.detectChanges();
    const name = document.getElementById('paddle_court_name') as HTMLHeadElement;
    expect(name.innerText).toEqual('Name');
    const paddleCourtType = document.getElementById('paddle_court_type') as HTMLHeadElement;
    expect(paddleCourtType.innerText).toEqual('Paddle court type');
    const rangeTimes = document.getElementById('paddle_court_range_times') as HTMLHeadElement;
    expect(rangeTimes.innerText).toEqual('Range times');
    const disabled = document.getElementById('paddle_court_disabled') as HTMLHeadElement;
    expect(disabled.innerText).toEqual('Disabled');
  });

  it('should open update dialog',()=>{
    component.openUpdatePaddleCourt(PADDLECOURTS[0]);
    fixture.detectChanges();
    const inputs = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;
    expect(inputs[0].value).toEqual('PC 1');
    expect(inputs[1].value).toEqual('12:00');
    expect(inputs[2].value).toEqual('14:00');
    expect(inputs[3].value).toEqual('14:00');
    expect(inputs[4].value).toEqual('16:00');
  });


});
