import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddleCourtComponent } from './paddle-court.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

describe('PaddleCourtComponent', () => {
  let component: PaddleCourtComponent;
  let fixture: ComponentFixture<PaddleCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatSortModule],
      declarations: [ PaddleCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddleCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
