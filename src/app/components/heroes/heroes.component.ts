import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private _heroesService:HeroesService) { 
    console.log('constructor heroes component');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
