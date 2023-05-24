import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiocalcComponent } from './audiocalc.component';

describe('AudiocalcComponent', () => {
  let component: AudiocalcComponent;
  let fixture: ComponentFixture<AudiocalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiocalcComponent]
    });
    fixture = TestBed.createComponent(AudiocalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
