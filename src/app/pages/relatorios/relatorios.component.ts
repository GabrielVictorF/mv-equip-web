import { Component, OnInit } from '@angular/core';
import * as JSC from 'jscharting';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = new JSC.Chart("chartDiv", {
      series: [{ points: [{ x: "A", y: 10 }, { x: "B", y: 5 }] }]
    });
  }

}
