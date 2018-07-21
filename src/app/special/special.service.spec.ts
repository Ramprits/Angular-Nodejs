/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpecialService } from './special.service';

describe('Service: Special', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecialService]
    });
  });

  it('should ...', inject([SpecialService], (service: SpecialService) => {
    expect(service).toBeTruthy();
  }));
});
