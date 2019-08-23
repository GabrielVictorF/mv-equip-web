import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  public emprestimo;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let parametro = params.get('emprestimo_id');
      console.log(parametro)
      this.api.getEmprestimos(parametro).subscribe(res => {
       this.emprestimo = res;
        console.log(this.emprestimo);
      });
    })
  }

}
