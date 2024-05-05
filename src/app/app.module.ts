import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDataComponent,
    NavbarComponent,
    HomePageComponent,
    PokeListComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
