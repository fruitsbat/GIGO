import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringExampleComponent } from './hiring-example.component';

describe('HiringExampleComponent', () => {
  let component: HiringExampleComponent;
  let fixture: ComponentFixture<HiringExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringExampleComponent]
    });
    fixture = TestBed.createComponent(HiringExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
