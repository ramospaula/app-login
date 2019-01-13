import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibirPostPage } from './exibir-post';

@NgModule({
  declarations: [
    ExibirPostPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibirPostPage)
  ],
})
export class ExibirPostPageModule {}
