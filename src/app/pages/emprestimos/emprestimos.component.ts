import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FunctionsService } from '../../services/functions.service';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {
  public emprestimos;
  public pesquisa = {
    data_emprestimo: ''
  }
  public statusEmp = {
    progress: 'progress',
    indeterminate: 'indeterminate'
  };
  public calendar;

  constructor(public api: ApiService, public functions: FunctionsService, public dataService: DataService) {}

  ngOnInit() {
    this.calendar = this.functions.initCalendar();
    this.functions.initSelect();

    this.api.getAllDevices().subscribe(res => {
      this.statusEmp.progress = '';
      this.statusEmp.indeterminate = '';
      this.emprestimos = res;
    }, Error => {
      this.functions.showToast('Erro ao obter empréstimos!');
      this.statusEmp.progress = '';
      this.statusEmp.indeterminate = '';  
    });
  }

  public pesquisar() {
    console.log(this.calendar[0].date);
    this.api.getEmprestimos(undefined, this.calendar[0].date).subscribe(res => {
      console.log(res);
      console.log(this.pesquisa)
      this.emprestimos = res;
    })
  }
}
