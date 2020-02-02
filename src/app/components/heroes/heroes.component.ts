import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private _heroesService:HeroesService, private router:Router) { 
    console.log('constructor heroes component');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  goToHeroDetail(name:string) {
    console.log('the selected hero is ' + name.toLocaleLowerCase())
    this.router.navigate(['/heroes', name.toLocaleLowerCase()]);
  }

}
