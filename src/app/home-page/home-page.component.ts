import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToPokeData() {
    this.router.navigateByUrl('/poke-data');
  }
  navigateToPokeListPage() {
    this.router.navigateByUrl('/poke-list');
  }
}
