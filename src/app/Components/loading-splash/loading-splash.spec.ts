import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSplashComponent } from './loading-splash';

describe('LoadingSplashComponent', () => {
  let component: LoadingSplashComponent;
  let fixture: ComponentFixture<LoadingSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSplashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSplashComponent);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


