import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.scss']
})
export class DatabidingComponent implements OnInit {

  public nome: string= "Muryllo";
  public idade: number= 22;
  public imgSrc: string = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrandchase%2Fimages%2F9%2F96%2FSO_AWESOME.png%2Frevision%2Flatest%3Fcb%3D20180927073105&imgrefurl=https%3A%2F%2Fgrandchase.fandom.com%2Fwiki%2FAmy&tbnid=FaPgB0dOfXHOmM&vet=12ahUKEwihtuSM3IH7AhX2lZUCHbPpCnAQMygAegUIARDIAQ..i&docid=PjPAku5dyVXYqM&w=1988&h=2207&q=amy%20gc&safe=active&ved=2ahUKEwihtuSM3IH7AhX2lZUCHbPpCnAQMygAegUIARDIAQ"
  public imgTitle= "Amy GC"
  public ckeckDisabled: boolean = true;
  public posicao: {x: number, y:number} = {x:0,y:0}

  constructor() { }

  ngOnInit(): void {
  }

  public alerta(valor:MouseEvent){
    console.log(valor);
  }

  public TesteMove(valor:any){
    this.posicao.x = valor.offsetX;
    this.posicao.y = valor.offsetY;
  }
}
