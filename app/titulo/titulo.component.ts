import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit,OnChanges,OnDestroy {

  @Input() public titulo: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    console.log(" Foi alterado com sucesso! ")
  }

  ngOnDestroy(): void {
    console.log(" Componente destruido com sucesso! ")
  }

}
