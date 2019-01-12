import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { UserPage } from '../user/user';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  public listaPosts: Array<any> = [];

  post = [
    {
     tituloPost: "a linguagem",
     autor: "admin",
     dataPublicacao: "08/01/2019",
     post: "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável",
    },
    {
     tituloPost: "Simplismente",
     autor: "Buda",
     dataPublicacao: "09/07/2018",
     post: "Não acredite em algo simplesmente porque ouviu. Não acredite em algo simplesmente porque todos falam a respeito. Não acredite em algo simplesmente porque está escrito em seus livros religiosos. Não acredite em algo só porque seus professores e mestres dizem que é verdade. Não acredite em tradições só porque foram passadas de geração em geração. Mas depois de muita análise e observação, se você vê que algo concorda com a razão, e que conduz ao bem e beneficio de todos, aceite-o e viva-o."
    },
    {
      tituloPost: "Acreditar em tudo",
     autor: "Paulo Coelho",
     dataPublicacao: "10/07/1987",
     post: "Podemos acreditar que tudo que a vida nos oferecerá no futuro é repetir o que fizemos ontem e hoje. Mas, se prestarmos atenção, vamos nos dar conta de que nenhum dia é igual a outro. Cada manhã traz uma benção escondida; uma benção que só serve para esse dia e que não se pode guardar nem desaproveita. Se não usamos este milagre hoje, ele vai se perder. Este milagre está nos detalhes do cotidiano; é preciso viver cada minuto porque ali encontramos a saída de nossas confusões, a alegria de nossos bons momentos, a pista correta para a decisão que tomaremos. Nunca podemos deixar que cada dia pareça igual ao anterior porque todos os dias são diferentes, porque estamos em constante processo de mudança."
    }
    ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

  }

  ionViewDidLoad() {
    this.getListaPost();
    console.log('ionViewDidLoad PostsPage');
  }

  getListaPost(){
    this.listaPosts = this.post;
  }

  openExibirPost(item){
    this.navCtrl.push(ExibirPostPage,{'post': item});
  }
  


}
