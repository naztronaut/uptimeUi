import { TestBed } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ScheduleService = TestBed.get(ScheduleService);
    expect(service).toBeTruthy();
  });
});
