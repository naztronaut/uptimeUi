import { TestBed } from '@angular/core/testing';

import { OutageService } from './outage.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('OutageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: OutageService = TestBed.get(OutageService);
    expect(service).toBeTruthy();
  });

  it('should get outages', () => {
    const service: OutageService = TestBed.get(OutageService);
    service.getOutages(1).subscribe(res => {
      expect(res[0]).toBeTruthy();
    });
  });
});
