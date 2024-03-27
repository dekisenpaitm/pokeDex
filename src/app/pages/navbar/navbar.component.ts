import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pulledCounter:any = 0;

  constructor(private pokemonService:PokemonService) {
   }

  ngOnInit() {
    //here we subscribe to the function that returns the observed value as a stream
    this.pokemonService.getCount().subscribe((value:any) => this.pulledCounter = value)
  }

  clearCounter(){
    this.pokemonService.clearPulledCounter();
  }


}
