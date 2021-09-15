import { TestBed } from '@angular/core/testing';

import { LandingIntroService } from './landing-intro.service';

describe('LandingIntroService', () => {
  let service: LandingIntroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingIntroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
