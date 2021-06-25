import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileComponent} from './profile.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogRef} from "@angular/material/dialog";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      declarations: [ ProfileComponent ],
      providers:[
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correct title', () => {
    expect(fixture.debugElement.nativeElement.querySelector('p').innerText).toEqual('COMPLETE THE PROFILE');
  });

  it('button disabled when not image', () => {
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
    component.image = "file.png";
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeFalsy();
  });
});
