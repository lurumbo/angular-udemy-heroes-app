import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  // El decorator Input me permite setear esta la propiedad hero desde el componente padre. 
  // Si no es definido desde fuera, entonces se creara como un objeto vacio.
  @Input() hero:any = {};
  @Input() heroName:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToHeroDetail() {
    const parsedName = this.heroName.toLocaleLowerCase();
    console.log('the selected hero is ' + parsedName)
    this.router.navigate(['/heroes', parsedName]);
  }

}
