import { TestBed } from '@angular/core/testing';

import { CurrentStatusService } from './current-status.service';

describe('CurrentStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentStatusService = TestBed.get(CurrentStatusService);
    expect(service).toBeTruthy();
  });
});
