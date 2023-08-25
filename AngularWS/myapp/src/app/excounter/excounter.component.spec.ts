import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcounterComponent } from './excounter.component';

describe('ExcounterComponent', () => {
  let component: ExcounterComponent;
  let fixture: ComponentFixture<ExcounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcounterComponent]
    });
    fixture = TestBed.createComponent(ExcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
