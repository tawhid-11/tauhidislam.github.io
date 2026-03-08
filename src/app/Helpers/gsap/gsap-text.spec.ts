import { TestBed } from '@angular/core/testing';

import { GsapTextService } from './gsap-text';

describe('GsapTextService', () => {
  let service: GsapTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsapTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


