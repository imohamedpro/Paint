import { TestBed } from '@angular/core/testing';

import { StepsTrackerService } from './steps-tracker.service';

describe('StepsTrackerService', () => {
  let service: StepsTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
