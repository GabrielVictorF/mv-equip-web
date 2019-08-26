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
import { FooterComponent } from './pages/footer/footer.component';
import { FunctionsService } from './services/functions.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevicesComponent,
    EmprestimosComponent,
    RelatoriosComponent,
    DetalheComponent,
    NovoEmprestimoComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
