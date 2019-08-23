import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {
  public emprestimos;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAllDevices().subscribe(res => {
      this.emprestimos = res,
      console.log(res)});
  }
}
