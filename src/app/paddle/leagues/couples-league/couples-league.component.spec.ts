import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplesLeagueComponent } from './couples-league.component';

describe('CouplesLeagueComponent', () => {
  let component: CouplesLeagueComponent;
  let fixture: ComponentFixture<CouplesLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
