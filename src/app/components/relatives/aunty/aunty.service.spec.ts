import { TestBed } from '@angular/core/testing';

import { AuntyService } from './aunty.service';

describe('AuntyService', () => {
  let service: AuntyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuntyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
