import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroPokemon } from '../components/models/registro-pokemon';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrosDePokemonsService {

  private API_REGISTRO_POKEMONS = 'http://localhost:9000';

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService,
  ) {
    this.ouvirStatusConexao();
  }

  private registrarAPI(pokemon: RegistroPokemon){
    this.http.post(`${this.API_REGISTRO_POKEMONS}/api/salvar-registro`, pokemon).subscribe(
      () => alert('Pokemon Registrado Com Sucesso!'),
      (err) => console.log('Erro ao Registrar o Pokemon!')
    );
  }

  public registrarPokemon(pokemon: RegistroPokemon){
    if(this.onlineOfflineService.isOnline){
      this.registrarAPI(pokemon);
    }else{
      console.log('Salvar Pokemon no banco local');
    }
  }

  public listarPokemons(): Observable<RegistroPokemon[]>{
    return this.http.get<RegistroPokemon[]>(`${this.API_REGISTRO_POKEMONS}/api/listar-registros`);
  }

  private ouvirStatusConexao(){
    this.onlineOfflineService.statusConexao.subscribe(online =>{
      if(online){
        console.log('Enviando os dados do meu banco local para API');
      }else{
        console.log('Estou Offline');
      }
    });
  }
}
