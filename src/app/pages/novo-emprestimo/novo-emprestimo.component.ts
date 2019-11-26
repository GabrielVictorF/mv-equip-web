import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

import { ApiService } from '../../services/api.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.scss']
})
export class NovoEmprestimoComponent implements OnInit {
  @Input() localizacoes;
  constructor(public api: ApiService, public functions: FunctionsService) {}

  ngOnInit() {
      this.functions.initCalendar();
      this.functions.initSelect();
      this.getLocalizacoes();
  }
  
  private getLocalizacoes() {
    this.api.getLocalizacoes().subscribe(res => {
      this.localizacoes = res;
      console.log(this.localizacoes)
    });
  }
}
