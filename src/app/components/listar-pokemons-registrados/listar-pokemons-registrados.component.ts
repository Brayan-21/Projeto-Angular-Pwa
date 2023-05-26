import { Component, OnInit } from '@angular/core';
import { RegistrosDePokemonsService } from 'src/app/services/registros-de-pokemons.service';
import { RegistroPokemon } from '../models/registro-pokemon';

@Component({
  selector: 'app-listar-pokemons-registrados',
  templateUrl: './listar-pokemons-registrados.component.html',
  styleUrls: ['./listar-pokemons-registrados.component.scss']
})
export class ListarPokemonsRegistradosComponent implements OnInit {

  public listaRegistroPokemons: RegistroPokemon[] = new Array<RegistroPokemon>();

  constructor(
    private apiRegistroPokemon: RegistrosDePokemonsService,
  ) { }

  ngOnInit(): void {
    this.listarRegistrosPokemons();
  }

  public listarRegistrosPokemons(){
    this.apiRegistroPokemon.listarPokemons().subscribe(res =>{
      this.listaRegistroPokemons = res;
    });
  }

}
