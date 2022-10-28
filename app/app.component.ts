import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <app-titulo titulo= "Olá Mundo" *ngIf="destruir"></app-titulo>
     <app-databiding></app-databiding>
     `
})
export class AppComponent implements OnInit{

   public valor: number =1;
   public destruir = true;

  constructor() { }

 

  ngOnInit(): void {
  
  }

  
}
