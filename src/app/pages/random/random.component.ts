import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pokemon, PulledPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  pulledPokemonCount:number = 0;

  allPokemons:Pokemon[] = [];
  randomNumber!:number;
  usersPokemon:PulledPokemon[] = [];

  randomShiny!:string;
  randomLvl!:number;
  randomPowerLvl!:string;
  randomBeautyLvl!:string;

  constructor(private pokemonService:PokemonService) {
  }

  ngOnInit() {
    if(localStorage.getItem('pulledPokemon')){
      this.usersPokemon = this.pokemonService.getPulledPokemon();
    }
  }

  randomizeAttributes(){
    this.setShiny();
    this.setLvl();
    this.randomBeautyLvl = this.setStat()
    this.randomPowerLvl = this.setStat()
  }

  getRandomPokemon(){
    let newDate = new Date()
    console.log(newDate.toString())
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.allPokemons = data.results?.map((element: any) => {
        return new Pokemon(element.name);
      });
      this.usersPokemon.push(
        new PulledPokemon(
          this.allPokemons[this.randomNumber].name,
          "https://img.pokemondb.net/sprites/red-blue/normal/" +this.allPokemons[this.randomNumber].name+'.png',
          this.randomLvl,
          this.randomShiny,
          this.randomPowerLvl,
          this.randomBeautyLvl,
          newDate.toString()))
          console.log(this.usersPokemon)
          this.pokemonService.setPulledPokemon(this.usersPokemon);
          this.pokemonService.addPulledCounter();
    });
    this.randomNumber = Math.floor(Math.random()*151);
    this.randomizeAttributes();
  }

  setShiny(){
    let quality = Math.random()*100
    quality >=99? this.randomShiny="Yes": this.randomShiny="No";
  }

  setLvl(){
    let quality = Math.floor(Math.random()*100)
    this.randomLvl = quality;
  }

  setStat():string{
    let randomNumber = Math.floor(Math.random()*100)
    let stat = "";
    switch(true){
      case (randomNumber <= 25):
        stat = "*";
        break;
      case (randomNumber >= 26 && randomNumber <= 75):
        stat = "**";
        break;
      case (randomNumber >= 76 && randomNumber <= 98):
        stat = "***";
        break;
      case (randomNumber >= 99 && randomNumber <= 100):
        stat = "****";
        break;
    }
    return stat;
  }

  getAnotherRandomPokemon(){
    this.getRandomPokemon();
  }
}
