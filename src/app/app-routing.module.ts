import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPokemonComponent } from './components/registrar-pokemon/registrar-pokemon.component';
import { ListarPokemonsRegistradosComponent } from './components/listar-pokemons-registrados/listar-pokemons-registrados.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'registrar'},
  { path: 'registrar',  component: RegistrarPokemonComponent},
  { path: 'listar', component: ListarPokemonsRegistradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
