import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit {
  pokemonData?: any;
  favPokemonData?: any;
  pokemonName: string = '';
  pokemonId: number = 1;
  favPokemonId: number = 1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.pokemonId = Math.floor(Math.random() * 152);
    this.getPokemonData();
    this.getFavPokemonData();
  }

  getPokemonData() {
    this.http
      // .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`)
      // .get(`https://pokeapi.co/api/v2/pokemon/10272/`)

      .subscribe((data) => {
        console.log(data);
        this.pokemonData = data;
      });
    console.log(this.pokemonId);
  }
  getFavPokemonData() {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.favPokemonId}/`)

      .subscribe((data) => {
        console.log(data);
        this.favPokemonData = data;
      });
    console.log(this.pokemonId);
  }

  getRandomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 1025);
    this.getPokemonData();
    console.log(this.pokemonId);
  }
  getRandomFavPokemon() {
    this.favPokemonId = Math.floor(Math.random() * 150);
    this.getFavPokemonData();
    console.log(this.favPokemonId);
  }

  capitalizeName = (pokemonData: any): string => {
    return (
      pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1)
    );
  };

  capitalizeFirstLetter(pokemonData: any): string {
    return pokemonData?.charAt(0).toUpperCase() + pokemonData?.slice(1);
  }
}
