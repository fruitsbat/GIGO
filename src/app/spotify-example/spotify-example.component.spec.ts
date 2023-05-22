import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyExampleComponent } from './spotify-example.component';

describe('SpotifyExampleComponent', () => {
  let component: SpotifyExampleComponent;
  let fixture: ComponentFixture<SpotifyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
