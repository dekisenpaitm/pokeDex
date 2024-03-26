
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
  currentSearchText:string="";

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.pokemonArray = data.results;
    });
  }

  setPickedPokemon(pokemon:any){
    this.pokemonService.setPickedPokemon(pokemon);
  }

  setSearchText(value:string){
    this.currentSearchText = value;
  }
}
