import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemonList:any;

  pokemonArray:any[] = [];

  constructor(private pokemonService:PokemonService){
    this.getAllPokemon()
  }
  title = 'pokeDex';

  getAllPokemon(){
    this.pokemonService.getAllPokemons().subscribe((data:any)=>data.results.forEach((element:any) => {
      console.log(element);
      this.pokemonArray.push(element);
    }))
  }

  getAPokemon(pokemonName:string){
    this.pokemonService.getAPokemons(pokemonName).subscribe(data=>this.pokemonList=data)
  }
}
