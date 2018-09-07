import { TestBed, inject } from '@angular/core/testing';

import { ItemAPIService } from './item-api.service';

describe('ItemAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemAPIService]
    });
  });

  it('should be created', inject([ItemAPIService], (service: ItemAPIService) => {
    expect(service).toBeTruthy();
  }));
});
