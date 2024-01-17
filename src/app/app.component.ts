import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { Component, Inject, Injectable } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(readonly pokemonDataComponent: PokemonDataComponent) {}
  showPokemon() {
    console.log('shown pokemon: ' + this.pokemonDataComponent.pokemonData?.id);
  }
}
