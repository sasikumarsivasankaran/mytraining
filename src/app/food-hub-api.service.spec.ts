import { TestBed, inject } from '@angular/core/testing';

import { FoodHubApiService } from './food-hub-api.service';

describe('FoodHubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodHubApiService]
    });
  });

  it('should be created', inject([FoodHubApiService], (service: FoodHubApiService) => {
    expect(service).toBeTruthy();
  }));
});
