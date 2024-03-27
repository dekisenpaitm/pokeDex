import { CommentsComponent } from './pages/comments/comments.component';
import { InputComponent } from './pages/input/input.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonListComponent } from './pages/pokemonList/pokemonList.component';
import { RandomComponent } from './pages/random/random.component';
import { DetailsComponent } from './pages/details/details.component';
import { RandomDetailsComponent } from './pages/randomDetails/randomDetails.component';
import { PulledPokemonComponent } from './pages/pulledPokemon/pulledPokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

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
    PulledPokemonComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
