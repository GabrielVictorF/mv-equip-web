import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  public emprestimo;
  constructor(private route: ActivatedRoute, private api: ApiService, private dataService: DataService) { }

  ngOnInit() {
    this.emprestimo = this.dataService.data;
    console.log(this.emprestimo)
  }

}
