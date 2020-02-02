import { Hero } from './../heroes/hero.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchedHero:string = '';
  matchedHeroes:Hero[] = [];

  constructor(private _heroService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.searchedHero = params['term'];
      this.matchedHeroes = this._heroService.searchHero(this.searchedHero);  
    });

    console.log('Match heroes', this.matchedHeroes);

  }

  goToHeroDetail(name:string) {
    const parsedName = name.toLocaleLowerCase();
    console.log('the selected hero is ' + name.toLocaleLowerCase())
    this.router.navigate(['/heroes', parsedName]);
  }


}
