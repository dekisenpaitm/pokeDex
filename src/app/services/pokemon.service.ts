import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit{

  pokemonList!:any;

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
}
