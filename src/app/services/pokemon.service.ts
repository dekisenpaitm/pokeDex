import { Pokemon, PulledPokemon } from '../models/pokemon.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{

  pokemonList!:any;
  pickedPokemon!:any;
  pokemonResult!:any[];
  errorMessage!:any;
  pulledPokemon:PulledPokemon[] = [];

  //to actually observe a single variable if it changes we need to add a new BehaviorSubject<T>(baseValue)
  private pulledCounterSource = new BehaviorSubject<number>(0);
  //after this we have to give our pulledCounter the Subject as a Observable
  pulledCounter = this.pulledCounterSource.asObservable();

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  addPulledCounter(){
    //if we want to add the count we need to take the current count.value +1 what ever we want to give to it
    this.pulledCounterSource.next(this.pulledCounterSource.value +1)
  }

  clearPulledCounter(){
    //if we want to clear the count we need to write the number we want it to be here
    this.pulledCounterSource.next(0)
  }

  getCount(): Observable<any> {
    //now we add a function to return us the observable value
    return of(this.pulledCounter);
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
