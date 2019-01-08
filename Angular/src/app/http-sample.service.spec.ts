import { TestBed } from '@angular/core/testing';

import { HttpSampleService } from './http-sample.service';

describe('HttpSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSampleService = TestBed.get(HttpSampleService);
    expect(service).toBeTruthy();
  });
});
