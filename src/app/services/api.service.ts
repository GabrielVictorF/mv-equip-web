import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
      'Access-Control-Allow-Credentials': 'true'
    })
  });
  private url = 'http://localhost:8080';
  constructor(public http: HttpClient) { }

  public getAllDevices() {
    let url = this.url + '/_QUERIES/get/emprestimo-full-relacionamento';
    return this.http.get(url, this.httpOptions);
  }

  public getCountTipoEmprestimo() {
    let url = this.url + '/_QUERIES/get/count-tipo-emprestimo';
    return this.http.get(url, this.httpOptions);
  }

  public getEmprestimos(emprestimoId?, data_emprestimo?) {
    let url = this.url + '/_QUERIES/get/emprestimo-full-relacionamento'
    if (emprestimoId) url += '?emprestimoId=' + emprestimoId;
    if (data_emprestimo) url += '?data_emprestimo=' + data_emprestimo;
    return this.http.get(url, this.httpOptions);
  }

  public getLocalizacoes() {
    let url = this.url + '/mv_equip/public/localizacao';
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  public getCountSolicitanteEmprestimo() {
    let url = this.url + '/_QUERIES/get/count-emprestimo-solicitante';
    return this.http.get(url, this.httpOptions);
  }
}
