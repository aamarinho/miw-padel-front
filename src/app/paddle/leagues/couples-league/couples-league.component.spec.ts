import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplesLeagueComponent } from './couples-league.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

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
      declarations: [ CouplesLeagueComponent ]
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
});
