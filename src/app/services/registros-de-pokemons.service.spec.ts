import { TestBed } from '@angular/core/testing';

import { RegistrosDePokemonsService } from './registros-de-pokemons.service';

describe('RegistrosDePokemonsService', () => {
  let service: RegistrosDePokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrosDePokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
