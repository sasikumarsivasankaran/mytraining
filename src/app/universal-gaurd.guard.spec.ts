import { TestBed, async, inject } from '@angular/core/testing';

import { UniversalGaurdGuard } from './universal-gaurd.guard';

describe('UniversalGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalGaurdGuard]
    });
  });

  it('should ...', inject([UniversalGaurdGuard], (guard: UniversalGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
