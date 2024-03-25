
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemonList',
  templateUrl: './pokemonList.component.html',
  styleUrls: ['./pokemonList.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonArray:any[] = [];
  pokemonMultiArray!:any[][];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  // Usage (e.g., in ngOnInit or where you set pokemonArray)

  getAllPokemon() {
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      // Assuming data.results contains the array of pokemons
      this.pokemonArray = data.results; // This line replaces the forEach loop

      // Now, chunk the array after it's fully loaded
      this.pokemonMultiArray = this.chunkPokemonArray(this.pokemonArray, 6);
    });
  }

  chunkPokemonArray(pokemonArray: any[], chunkSize: number):any[][] {
    let result=[];
    for (let i = 0; i < pokemonArray.length; i += chunkSize) {
      result.push(pokemonArray.slice(i, i + chunkSize));
    }
    return result;
  }

  setPickedPokemon(pokemon:any){
    this.pokemonService.setPickedPokemon(pokemon);
  }
}
