import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'poke-data', component: PokemonDataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonDataComponent,
    NavbarComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PokemonDataComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
