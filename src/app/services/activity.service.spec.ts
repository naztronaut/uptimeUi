import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ActivityService],
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ActivityService = TestBed.get(ActivityService);
    expect(service).toBeTruthy();
  });

  it('should get activity', () => {
    const service: ActivityService = TestBed.get(ActivityService);
    service.getActivity(1).subscribe(res => {
      expect(res).toBeTruthy();
    });
  });
});
