import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from './../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroService:HeroesService, private router:Router) { }

  ngOnInit() {
  }

  onSearch(text: string) {
    console.log('text input:', text);
    this._heroService.searchedHero = text;
    this.router.navigate(['/search', text]);
  }

}
