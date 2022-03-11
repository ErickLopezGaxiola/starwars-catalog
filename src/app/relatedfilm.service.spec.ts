import { TestBed } from '@angular/core/testing';

import { RelatedfilmService } from './relatedfilm.service';

describe('RelatedfilmService', () => {
  let service: RelatedfilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedfilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
