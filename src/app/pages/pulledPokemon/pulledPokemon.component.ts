import { Component, OnInit } from '@angular/core';
import { PulledPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pulledPokemon',
  templateUrl: './pulledPokemon.component.html',
  styleUrls: ['./pulledPokemon.component.css']
})
export class PulledPokemonComponent implements OnInit {

  pulledPokemon:PulledPokemon[]=[]

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.getPulledPokemon();
    console.log(this.pulledPokemon)
  }

  getPulledPokemon(){
    this.pulledPokemon = this.pokemonService.getPulledPokemon()?.map((element:any)=>{
      console.log(element.date)
      return new PulledPokemon(element.name, element.img, element.lvl, element.shiny, element.power, element.beauty, element.pulled);
    })
  }

  removePulledPokemon(index:number){
    let position = this.pulledPokemon.length -1 -index
    this.pulledPokemon.splice(position, 1)
    this.pokemonService.setPulledPokemon(this.pulledPokemon)
  }

}
