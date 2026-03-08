import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingItemsComponent } from './infinite-scrolling-items';

describe('InfiniteScrollingItemsComponent', () => {
  let component: InfiniteScrollingItemsComponent;
  let fixture: ComponentFixture<InfiniteScrollingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteScrollingItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollingItemsComponent);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


