import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'poke-data', component: PokemonDataComponent },
  { path: 'poke-list', component: PokeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
