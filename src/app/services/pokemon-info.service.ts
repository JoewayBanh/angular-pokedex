import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokemonInfoService {
  constructor(private readonly http: HttpClient) {}

  getPokemonData() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }
}
