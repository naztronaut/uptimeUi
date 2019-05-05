import { TestBed } from '@angular/core/testing';

import { LedService } from './led.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LedService = TestBed.get(LedService);
    expect(service).toBeTruthy();
  });

  it('should get LEDs', () => {
    const service: LedService = TestBed.get(LedService);
    service.getLeds().subscribe(res => {
      expect(res).toBeTruthy();
    });
  });
});
