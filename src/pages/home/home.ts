import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas'
import { DetalhesPage } from '../detalhes/detalhes'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pessoas: any;

  constructor(public navCtrl: NavController, public pesssoasProvider: PessoasProvider) {
          this.loadPessoas();
  }

  loadPessoas() {
    this.pesssoasProvider.load().then(data => {
      this.pessoas = data;
    });
  }

  verDetalhes(pessoaEmail: string): void {
      this.navCtrl.push(DetalhesPage, {email: pessoaEmail});
  }

}
