import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FunctionsService } from '../../services/functions.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {
  public emprestimos;
  public statusEmp = {
    progress: 'progress',
    indeterminate: 'indeterminate'
  };

  constructor(public api: ApiService, public functions: FunctionsService) { }

  ngOnInit() {
    this.api.getAllDevices().subscribe(res => {
      this.statusEmp.progress = '';
      this.statusEmp.indeterminate = '';
      this.emprestimos = res;
    }, Error => {
      this.functions.showToast('Error');
      this.statusEmp.progress = '';
      this.statusEmp.indeterminate = '';

    });
  }
}
