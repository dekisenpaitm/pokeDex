import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListComponent } from './pages/pokemonList/pokemonList.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'pokemonList', component:PokemonListComponent},
  {path:'pokemon/:name',  component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
