import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PaddleComponent} from './paddle.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProfileComponent} from "./profile/profile.component";

describe('PaddleComponent', () => {
  let component: PaddleComponent;
  let fixture: ComponentFixture<PaddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PaddleComponent,
        ProfileComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open profile', () => {
    component.openProfile();
    fixture.detectChanges();
    const title = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLHeadElement>;
    expect(title[0].innerText).toEqual('COMPLETE THE PROFILE');
  });
});
