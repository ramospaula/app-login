import { NgModule} from '@angular/core';
import { DetalhesComponent } from './detalhes/detalhes';
import { IonicModule } from 'ionic-angular';
import { PostComponent } from './post/post';
@NgModule({
	declarations: [DetalhesComponent,
    PostComponent],
	imports: [IonicModule],
	exports: [DetalhesComponent,
    PostComponent]
})
export class ComponentsModule {






}
