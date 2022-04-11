import { TestBed } from '@angular/core/testing';

import { UncleService } from './uncle.service';

describe('UncleService', () => {
  let service: UncleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UncleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
