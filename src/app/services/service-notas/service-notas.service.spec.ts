import { TestBed } from '@angular/core/testing';

import { ServiceNotasService } from './service-notas.service';

describe('ServiceNotasService', () => {
  let service: ServiceNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
