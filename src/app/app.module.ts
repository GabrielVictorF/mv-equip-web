import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DevicesComponent } from './pages/devices/devices.component';

import { HttpClientModule } from '@angular/common/http';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { NovoEmprestimoComponent } from './pages/novo-emprestimo/novo-emprestimo.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevicesComponent,
    EmprestimosComponent,
    RelatoriosComponent,
    DetalheComponent,
    NovoEmprestimoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
