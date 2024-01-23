import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { Component } from '@angular/core';

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
