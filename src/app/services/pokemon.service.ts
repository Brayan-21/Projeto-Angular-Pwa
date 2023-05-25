import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'
import { Pokemon } from '../components/models/pokemon';

interface PokemonResponse {
  results: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private API_POKEMON = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  private mapResultPokemons(resultPokemon: Array<any>): Pokemon[]{
    return resultPokemon.map(res => ({
      nome: res.name,
      url: res.url
    }));
  }

  public getPokemons(): Observable<Pokemon[]>{
    return this.http.get<PokemonResponse>(`${this.API_POKEMON}/pokemon`)
        .pipe(
          map((res: PokemonResponse) => this.mapResultPokemons(res.results))
        );
  }

}
