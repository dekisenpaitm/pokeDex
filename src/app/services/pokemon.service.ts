import { Pokemon, PulledPokemon } from '../models/pokemon.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{

  pokemonList!:any;
  pickedPokemon!:any;
  pokemonResult!:any[];
  errorMessage!:any;
  pulledPokemon:PulledPokemon[] = [];

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  getPulledPokemon(){
    let pulledPokemonString:any = localStorage.getItem('pulledPokemon');
    this.pulledPokemon = JSON.parse(pulledPokemonString);
    return this.pulledPokemon;
  }

  setPulledPokemon(pokemon:PulledPokemon[]){
    let pulledPokemonString:any = JSON.stringify(pokemon);
    localStorage.setItem('pulledPokemon', pulledPokemonString)
  }

  getAllPokemons():Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
  }

  getAPokemons(pokemonName:string =''):Observable<any>{
    let newName = pokemonName.toLowerCase()
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + newName);
  }

  setPickedPokemon(pokemon:any){
    this.pickedPokemon = pokemon;
  }

  getPickedPokemon(){
    return of(this.pickedPokemon);
  }
}
