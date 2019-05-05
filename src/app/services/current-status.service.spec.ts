import { TestBed } from '@angular/core/testing';

import { CurrentStatusService } from './current-status.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CurrentStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CurrentStatusService = TestBed.get(CurrentStatusService);
    expect(service).toBeTruthy();
  });
});
