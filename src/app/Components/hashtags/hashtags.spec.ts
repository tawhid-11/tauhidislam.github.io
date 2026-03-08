import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsComponent } from './hashtags';

describe('HashtagsComponent', () => {
  let component: HashtagsComponent;
  let fixture: ComponentFixture<HashtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashtagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashtagsComponent);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


