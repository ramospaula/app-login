import { Component, Input, Output, EventEmitter  } from '@angular/core';

/**
 * Generated class for the DetalhesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesComponent {

 
  @Input('meuTitulo') tituloExibir;
  @Input('meuAutor') autorExibir;
  @Input('minhaData') dataExibir;
  @Input('meuPost') postExibir;

  text: string;
  titulo: string;


  exibirTitulo: string;
  exibirAutor: string;
  exibirData: string;
  exibirPost: string;

  constructor() {
    console.log('Hello DetalhesComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit(){
  
    this.exibirTitulo = this.tituloExibir;
    this.exibirAutor = this.autorExibir;
    this.exibirData = this.dataExibir;
    this.exibirPost = this.postExibir;
  }

}
