import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { RegistrosDePokemonsService } from 'src/app/services/registros-de-pokemons.service';
import { RegistroPokemon } from '../models/registro-pokemon';

@Component({
  selector: 'app-registrar-pokemon',
  templateUrl: './registrar-pokemon.component.html',
  styleUrls: ['./registrar-pokemon.component.scss']
})
export class RegistrarPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = new Array<Pokemon>();
  public registroPokemon: RegistroPokemon = new RegistroPokemon();

  constructor(
    private apiPokemon: PokemonService,
    private apiRegistroPokemon: RegistrosDePokemonsService,
  ) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  public listarPokemons(){
    this.apiPokemon.getPokemons().subscribe(res =>{
      this.pokemons = res;
    });
  }

  public registrarPokemon(){
    this.apiRegistroPokemon.registrarPokemon(this.registroPokemon);
  }

}
