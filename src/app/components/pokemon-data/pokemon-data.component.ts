import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit {
  pokemonData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPokemonData();
  }
  getPokemonData() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe((data) => {
        console.log(data);
        this.pokemonData = data;
      });
  }
}
