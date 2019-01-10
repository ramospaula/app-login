import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibirMensagemPage } from './exibir-mensagem';

@NgModule({
  declarations: [
    ExibirMensagemPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibirMensagemPage),
  ],
})
export class ExibirMensagemPageModule {}
