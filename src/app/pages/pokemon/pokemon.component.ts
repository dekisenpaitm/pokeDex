import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonStats, PokemonInfo, PokemonTypes } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  pokemonName!:string;

  @Output()
  pokemonHasChanged = new EventEmitter();

  pokemon!:any[];
  pokemonInfos:PokemonInfo = new PokemonInfo(0,"",0);
  pokemonStats:PokemonStats[]=[];
  pokemonTypes:PokemonTypes[]=[];

  pickedPokemon:any;

  constructor(private pokemonService:PokemonService) {}

  ngOnInit() {
    this.getPickedPokemon();
    this.onPokemonHasChanged();
  }

  getAPokemon(pokemonName: string) {
    this.pokemonService.getAPokemons(pokemonName).subscribe((data: any) => {
      this.pokemonStats = data.stats?.map((element: any) => {
        return new PokemonStats(element.stat.name, element.base_stat);
      });

      this.pokemonTypes = data.types?.map((element:any)=>{
        return new PokemonTypes(element.type.name);
      });

      this.pokemonInfos = new PokemonInfo(data.id, data.name, data.height);

      console.log(this.pokemonStats, this.pokemonInfos);
    })
  }


  getPickedPokemon(){
    this.pokemonService.getPickedPokemon().subscribe((data:any)=>this.pickedPokemon = data);
    this.getAPokemon(this.pickedPokemon)
  }

  onPokemonHasChanged(){
    this.pokemonHasChanged.emit(this.pokemon);
  }
}
