import { TestBed } from '@angular/core/testing';

import { PitakayaService } from './pitakaya.service';

describe('PitakayaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PitakayaService = TestBed.get(PitakayaService);
    expect(service).toBeTruthy();
  });
});
