import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemonName!:string;

  pickedPokemon:any;
  pokemon:any;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getPickedPokemon();
  }

  getAPokemon(pokemonName:string){
    this.pokemonService.getAPokemons(pokemonName).subscribe(data=>this.pokemon=data);
  }

  getPickedPokemon(){
    this.pokemonService.getPickedPokemon().subscribe((data:any)=>this.pickedPokemon = data);
    console.log(this.pickedPokemon)
  }
}
