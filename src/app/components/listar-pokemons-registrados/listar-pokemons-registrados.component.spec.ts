import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPokemonsRegistradosComponent } from './listar-pokemons-registrados.component';

describe('ListarPokemonsRegistradosComponent', () => {
  let component: ListarPokemonsRegistradosComponent;
  let fixture: ComponentFixture<ListarPokemonsRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPokemonsRegistradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPokemonsRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
