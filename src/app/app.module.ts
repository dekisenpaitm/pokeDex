import { InputComponent } from './pages/input/input.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListComponent } from './pages/pokemonList/pokemonList.component';
import { RandomComponent } from './pages/random/random.component';
import { DetailsComponent } from './pages/details/details.component';
import { RandomDetailsComponent } from './pages/randomDetails/randomDetails.component';
import { PulledPokemonComponent } from './pages/pulledPokemon/pulledPokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    PokemonListComponent,
    NavbarComponent,
    RandomComponent,
    InputComponent,
    DetailsComponent,
    RandomDetailsComponent,
    PulledPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
