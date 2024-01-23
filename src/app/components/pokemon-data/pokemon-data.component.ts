import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit {
  pokemonData: any;
  pokemonId: number = 0;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.pokemonId = Math.floor(Math.random() * 152);
    this.getPokemonData();
  }

  getPokemonData() {
    this.http
      // .get('https://pokeapi.co/api/v2/pokemon/ditto')
      //    .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`)
      .get(`https://pokeapi.co/api/v2/pokemon/10272/`)

      .subscribe((data) => {
        console.log(data);
        this.pokemonData = data;
      });
    console.log(this.pokemonId);
  }
  getRandomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 1025);
    this.getPokemonData();
    console.log(this.pokemonId);
  }
}
//    .get(`'https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`)
