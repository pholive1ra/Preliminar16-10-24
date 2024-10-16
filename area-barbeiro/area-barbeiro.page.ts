import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-area-barbeiro',
  templateUrl: './area-barbeiro.page.html',
  styleUrls: ['./area-barbeiro.page.scss'],
})
export class AreaBarbeiroPage implements OnInit {
  agendamentos: any[] = []; // Para armazenar os agendamentos
  barberUID: string | null = null; // Declaração da propriedade barberUID

  constructor(private agendamentoService: AgendamentoService, private authService: AuthService) {}

  ngOnInit() {
    this.barberUID = this.authService.getUID(); // Obtém o UID do barbeiro logado
    this.carregarAgendamentos(); // Carrega os agendamentos
  }

  carregarAgendamentos() {
    if (this.barberUID) { // Verifica se barberUID não é nulo
      this.agendamentos = this.agendamentoService.obterAgendamentosPorBarbeiro(this.barberUID);
    }
  }

  excluirAgendamento(index: number) {
    this.agendamentoService.excluirAgendamento(index); // Chama o método para excluir o agendamento
    this.carregarAgendamentos(); // Atualiza a lista de agendamentos após a exclusão
  }
}
