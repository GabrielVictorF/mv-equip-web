import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';

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

import { FormsModule } from '@angular/forms';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: "https://38ce6f73d3f54904a34f3ff23be63bed@sentry.io/1544250"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    sessionStorage.setItem('sentry-error-ev-id', eventId);
    console.log(eventId)
  }
}


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
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: ErrorHandler, useClass: SentryErrorHandler}, FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
