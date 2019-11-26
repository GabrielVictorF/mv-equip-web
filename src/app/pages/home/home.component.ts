import { Component, OnInit,  } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [{
    titulo: 'Novo empréstimo',
    descricao: 'Criar novo empréstimo.',
    imagem: '../../../assets/img/notebook.png',
    router: '/novo-emprestimo',
    icon: 'add'
  }, {
    titulo: 'Relatórios',
    descricao: 'Diversos tipos de relatórios.',
    imagem: '../../../assets/img/relatorio.jpg',
    router: '/relatorios',
    icon: 'assessment'
  }, {
    titulo: 'Empréstimos',
    descricao: 'Visualizar empréstimos.',
    imagem: '../../../assets/img/transfer.png',
    router: '/emprestimos',
    icon: 'laptop'
  }];
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
