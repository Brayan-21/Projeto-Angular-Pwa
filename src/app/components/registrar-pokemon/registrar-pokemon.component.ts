import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-registrar-pokemon',
  templateUrl: './registrar-pokemon.component.html',
  styleUrls: ['./registrar-pokemon.component.scss']
})
export class RegistrarPokemonComponent implements OnInit {

  public pokemons: Pokemon[] = new Array<Pokemon>();

  constructor(
    private apiPokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  public listarPokemons(){
    this.apiPokemon.getPokemons().subscribe(res =>{
      this.pokemons = res;
    });
  }

}
