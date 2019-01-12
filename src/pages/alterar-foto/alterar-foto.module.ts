import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarFotoPage } from './alterar-foto';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AlterarFotoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarFotoPage),
    ComponentsModule
  ],
})
export class AlterarFotoPageModule {}
