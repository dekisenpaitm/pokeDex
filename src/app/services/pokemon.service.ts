import { Pokemon } from './../shared/pokemon';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{

  pokemonList!:any;
  pickedPokemon!:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
  }

  getAllPokemons():Observable<any>{
  return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
  }

  getAPokemons(pokemonName:string):Observable<any>{
   return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase());
  }

  setPickedPokemon(pokemon:any){
    this.pickedPokemon = pokemon;
  }

  getPickedPokemon(){
    return of(this.pickedPokemon);
  }
}
