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
  pokemonId: number = 0;
  favPokemonId: number = 0;

  pokemonTypes = [
    { type: 'normal', class: 'normal' },
    { type: 'fire', class: 'fire' },
    { type: 'water', class: 'water' },
    { type: 'electric', class: 'electric' },
    { type: 'grass', class: 'grass' },
    { type: 'ice', class: 'ice' },
    { type: 'fighting', class: 'fighting' },
    { type: 'poison', class: 'poison' },
    { type: 'ground', class: 'ground' },
    { type: 'flying', class: 'flying' },
    { type: 'psychic', class: 'psychic' },
    { type: 'bug', class: 'bug' },
    { type: 'rock', class: 'rock' },
    { type: 'ghost', class: 'ghost' },
    { type: 'dragon', class: 'dragon' },
    { type: 'dark', class: 'dark' },
    { type: 'steel', class: 'steel' },
    { type: 'fairy', class: 'fairy' },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.pokemonId = Math.floor(Math.random() * 1025);
    this.favPokemonId = Math.floor(Math.random() * 152);
    this.getPokemonData();
    this.getFavPokemonData();
  }

  getPokemonData() {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`)
      .subscribe((data) => {
        // console.log(data);
        this.pokemonData = data;
      });
    // console.log(this.pokemonId);
  }

  getFavPokemonData() {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.favPokemonId}/`)
      .subscribe((data) => {
        // console.log(data);
        this.favPokemonData = data;
      });
    // console.log(this.pokemonId);
  }

  getRandomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 1025);
    this.getPokemonData();
    // console.log(this.pokemonId);
    // console.log(this.pokemonData);
  }
  getRandomFavPokemon() {
    this.favPokemonId = Math.floor(Math.random() * 150);
    this.getFavPokemonData();
    // console.log(this.favPokemonId);
  }

  capitalizeName = (pokemonData: any): string => {
    return (
      pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1)
    );
  };

  capitalizeFirstLetter(pokemonData: any): string {
    return pokemonData?.charAt(0).toUpperCase() + pokemonData?.slice(1);
  }
  getOptionClass(content: string): string {
    const option = this.pokemonData.types.find(
      (opt: any) => opt.name === content
    );
    console.log(this.pokemonData.types);
    return option ? option.class : '';
  }
}
