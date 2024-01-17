import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonInfoService {
  public pokemonData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPokemonData();
  }
  getPokemonData() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
