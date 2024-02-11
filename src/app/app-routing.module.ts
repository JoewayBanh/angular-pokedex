import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'poke-data', component: PokemonDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
