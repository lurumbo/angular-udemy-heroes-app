import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _heroService:HeroesService) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params['name']);
      this.hero = this._heroService.getHeroByName(params['name']);
      console.log('the selected hero', this.hero)
    })
  }

  ngOnInit() {
  }

}
