import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedOnComponent } from './based-on.component';

describe('BasedOnComponent', () => {
  let component: BasedOnComponent;
  let fixture: ComponentFixture<BasedOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
