import { Component, OnInit } from '@angular/core';
import * as JSC from 'jscharting';

import { ApiService } from '../../services/api.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {
  public dados;
  public relatorio;

  constructor(public api: ApiService, public functions: FunctionsService) { }

  ngOnInit() {

  }
  gerarRelatorio(tipo) {
    //this.load.present();
    switch(tipo) {
      case 1: // Interno / Externo
        this.api.getCountTipoEmprestimo().subscribe(res => {
          this.dados = res;
          console.log(res)
          this.relatorio = new JSC.Chart("chartDiv", {
            series: [{ 
              name: 'Empréstimos por tipo',
              points: this.dados
            }],
            type: 'pie',
            title_label_text: 'Empréstimos por tipo (Externo / Interno)'
        });
      }, Error => {
        this.functions.showToast('Não foi possível gerar o relatório!')
    }); 
      break;
      case 2: // Por usuário
        this.api.getCountSolicitanteEmprestimo().subscribe(res => {
          this.dados = res;
          console.log(this.dados)
           this.relatorio = new JSC.Chart("chartDiv", {
            series: [{
              name: 'Empréstimo por usuário',
              points: this.dados
            }],
            type: 'pie',
            title_label_text: 'Empréstimos por Usuário'
          })
        }, Error => {
          this.functions.showToast('Não foi possível gerar o relatório!')
        });
        break;
    }
  }
}
