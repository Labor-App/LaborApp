import { TestBed } from '@angular/core/testing';

import { DemandadojuridicoService } from './demandadojuridico.service';

describe('DemandadojuridicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandadojuridicoService = TestBed.get(DemandadojuridicoService);
    expect(service).toBeTruthy();
  });
});
