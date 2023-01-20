import { TestBed } from '@angular/core/testing';

import { AtmService } from './atm.service';

describe('AtmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtmService = TestBed.get(AtmService);
    expect(service).toBeTruthy();
  });
});
