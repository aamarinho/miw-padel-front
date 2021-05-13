import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddelComponent } from './paddel.component';

describe('PaddelComponent', () => {
  let component: PaddelComponent;
  let fixture: ComponentFixture<PaddelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaddelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
