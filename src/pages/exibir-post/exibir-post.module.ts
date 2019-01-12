import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibirPostPage } from './exibir-post';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExibirPostPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibirPostPage),
    ComponentsModule
  ],
})
export class ExibirPostPageModule {}
