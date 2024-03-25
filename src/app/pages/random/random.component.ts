import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  allPokemons:any[] = [];
  randomNumber!:number;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  getRandomPokemon(){
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.allPokemons = data.results});
    this.randomNumber = Math.floor(Math.random()*151);
  }

  getAnotherRandomPokemon(){
    this.getRandomPokemon();
  }
}
