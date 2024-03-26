import { Component, OnInit } from '@angular/core';
import { Pokemon, PulledPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  allPokemons:Pokemon[] = [];
  randomNumber!:number;
  usersPokemon:PulledPokemon[] = [];

  randomShiny!:string;
  randomLvl!:number;
  randomPowerLvl!:string;
  randomBeautyLvl!:string;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
  }

  randomizeAttributes(){
    this.setShiny();
    this.setLvl();
    this.setBeautyLvl();
    this.setPowerLvl();
  }

  getRandomPokemon(){
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.allPokemons = data.results?.map((element: any) => {
        return new Pokemon(element.name);
      });
      this.usersPokemon.push(
        new PulledPokemon(
          this.allPokemons[this.randomNumber].name,
          "https://img.pokemondb.net/sprites/red-blue/normal/" +this.allPokemons[this.randomNumber].name+'.jpg',
          this.randomLvl,
          this.randomShiny,
          this.randomPowerLvl,
          this.randomBeautyLvl,
          new Date))
    });
    this.randomNumber = Math.floor(Math.random()*151);
    this.randomizeAttributes();
    console.log(this.usersPokemon);
  }

  setShiny(){
    let quality = Math.random()*100
    quality >=99? this.randomShiny="Yes": this.randomShiny="No";
  }

  setLvl(){
    let quality = Math.floor(Math.random()*100)
    this.randomLvl = quality;
  }

  setPowerLvl(){
    let power = Math.floor(Math.random()*100)
    console.log(power)
    switch(true){
      case (power <= 25):
        this.randomPowerLvl = "Weak";
        break;
      case (power >= 26 && power <= 75):
        this.randomPowerLvl = "Medium";
        break;
      case (power >= 76 && power <= 98):
        this.randomPowerLvl = "Strong";
        break;
      case (power >= 99 && power <= 100):
        this.randomPowerLvl = "Godlike!!";
        break;
    }
  }

  setBeautyLvl(){
    let beauty = Math.floor(Math.random()*100)
    console.log(beauty)
    switch(true){
      case (beauty <= 25):
        this.randomBeautyLvl = "Ugly";
        break;
      case (beauty >= 26 && beauty <= 75):
        this.randomBeautyLvl = "Okayish";
        break;
      case (beauty >= 76 && beauty <= 98):
        this.randomBeautyLvl = "Beautiful";
        break;
      case (beauty >= 99 && beauty <= 100):
        this.randomBeautyLvl = "Breathtaking!!";
        break;
    }
  }

  getAnotherRandomPokemon(){
    this.getRandomPokemon();
  }
}
