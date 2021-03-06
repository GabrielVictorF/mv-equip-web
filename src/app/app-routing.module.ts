import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { NovoEmprestimoComponent } from './pages/novo-emprestimo/novo-emprestimo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'emprestimos', component: EmprestimosComponent},
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'detalhe/:emprestimo_id', component: DetalheComponent },
  { path: 'novo-emprestimo', component: NovoEmprestimoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
