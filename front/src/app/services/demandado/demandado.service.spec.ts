import { TestBed } from '@angular/core/testing';

import { DemandadoService } from './demandado.service';

describe('DemandadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandadoService = TestBed.get(DemandadoService);
    expect(service).toBeTruthy();
  });
});
