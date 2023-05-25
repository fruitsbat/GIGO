import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExampleComponent } from './search-example.component';

describe('SearchExampleComponent', () => {
  let component: SearchExampleComponent;
  let fixture: ComponentFixture<SearchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchExampleComponent]
    });
    fixture = TestBed.createComponent(SearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
