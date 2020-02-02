import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  // El decorator Input me permite setear esta la propiedad hero desde el componente padre. 
  // Si no es definido desde fuera, entonces se creara como un objeto vacio.
  @Input() hero:any = {};
  @Input() heroName:string = '';

  // El decorator Output me permite disparar un evento desde un componente hijo.
  // Para esto seteamos el nombre del evento que queremos que el padre este escuchando.
  // El contenido entre <> es el tipo de dato que va a emitir esta evento.
  // Se debe inicializar en  el constructor.
  @Output() selectedHero:EventEmitter<string>;

  constructor(private router:Router) { 
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  goToHeroDetail() {
    const parsedName = this.heroName.toLocaleLowerCase();
    this.selectedHero.emit(parsedName);
  }

}
