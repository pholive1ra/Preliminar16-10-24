import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redireciona para a página inicial
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) // Carrega o módulo da página inicial
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) // Carrega o módulo da página de login
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule) // Carrega o módulo da página de cadastro
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoPageModule) // Carrega o módulo da página de agendamento
  },
  {
    path: 'meus-agendamentos',
    loadChildren: () => import('./meus-agendamentos/meus-agendamentos.module').then(m => m.MeusAgendamentosPageModule) // Carrega o módulo da página de visualização de agendamentos
  },
  {
    path: 'area-barbeiro',
    loadChildren: () => import('./area-barbeiro/area-barbeiro.module').then( m => m.AreaBarbeiroPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackPageModule)
  },

  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Habilita o pré-carregamento de módulos
  ],
  exports: [RouterModule] // Exporta o RouterModule para ser usado em outros módulos
})
export class AppRoutingModule { }
