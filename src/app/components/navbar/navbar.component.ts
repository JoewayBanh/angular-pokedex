import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToHomePage() {
    this.router.navigateByUrl('/');
  }
  navigateToPokeData() {
    this.router.navigateByUrl('/poke-data');
  }
  navigateToPokeListPage() {
    this.router.navigateByUrl('/poke-list');
  }
}
