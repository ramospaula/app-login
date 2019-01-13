import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { MensagensPageModule } from '../mensagens/mensagens.module';
import { PostsPageModule } from '../posts/posts.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
    MensagensPageModule,
    PostsPageModule,
    ComponentsModule
  ],
})
export class UserPageModule {}
