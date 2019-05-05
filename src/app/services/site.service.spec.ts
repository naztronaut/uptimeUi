import { TestBed } from '@angular/core/testing';

import { SiteService } from './site.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SiteService],
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    const service = TestBed.get(SiteService);
  });

  it('should be created', () => {
    const service: SiteService = TestBed.get(SiteService);
    expect(service).toBeTruthy();
  });

  it('should get sites', () => {
    const service: SiteService = TestBed.get(SiteService);
    service.getSites(1).subscribe(res => {
      expect(res).toBeTruthy();
    });
  });
});
