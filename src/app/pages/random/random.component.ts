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

  randomShiny!:string;
  randomLvl!:number;
  randomPowerLvl!:string;
  randomBeautyLvl!:string;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getRandomPokemon();
    this.randomizeAttributes();
  }

  randomizeAttributes(){
    this.setShiny();
    this.setLvl();
    this.setBeautyLvl();
    this.setPowerLvl();
  }

  getRandomPokemon(){
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.allPokemons = data.results});
    this.randomNumber = Math.floor(Math.random()*151);
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
