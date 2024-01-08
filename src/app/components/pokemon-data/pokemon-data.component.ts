import { PokemonInfoService } from './../../services/pokemon-info.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit {
  pokemon: any;
  constructor(private readonly pokemonInfoService: PokemonInfoService) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonInfoService.getPokemonData();
    console.log(firstValueFrom(this.pokemon.name));
  }
}
