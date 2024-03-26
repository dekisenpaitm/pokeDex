import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListComponent } from './pages/pokemonList/pokemonList.component';
import { RandomComponent } from './pages/random/random.component';
import { PulledPokemonComponent } from './pages/pulledPokemon/pulledPokemon.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'pokemonList', component:PokemonListComponent},
  {path:'random', component:RandomComponent},
  {path:'owned', component:PulledPokemonComponent},
  {path:'pokemon/:name',  component:PokemonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
