import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pokemonData?: any[] = [];
  pokemonId: number = 0;
  numberOfPokemon: number = 494;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    for (let i = 1; i <= this.numberOfPokemon; i++) {
      this.getPokemonData(i);
    }
  }
  getPokemonData(pokemonId: number) {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .subscribe((data) => {
        this.pokemonData?.push(data);
        this.pokemonData?.sort((a, b) => {
          return a.id - b.id;
        });
      });
  }
}
