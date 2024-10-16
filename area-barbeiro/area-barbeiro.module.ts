import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AreaBarbeiroPageRoutingModule } from './area-barbeiro-routing.module';
import { AreaBarbeiroPage } from './area-barbeiro.page';
import { AgendamentoService } from '../agendamento.service'; // Importa o AgendamentoService
import { AuthService } from '../auth.service'; // Importa o AuthService

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaBarbeiroPageRoutingModule
  ],
  declarations: [AreaBarbeiroPage],
  providers: [AgendamentoService, AuthService] // Certifique-se de que os serviços estão sendo fornecidos
})
export class AreaBarbeiroPageModule {}
