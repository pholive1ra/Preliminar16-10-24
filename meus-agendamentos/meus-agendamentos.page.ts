import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.page.html',
  styleUrls: ['./meus-agendamentos.page.scss'],
})
export class MeusAgendamentosPage implements OnInit {
  agendamentos: any[] = []; // Para armazenar os agendamentos do cliente

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {
    this.carregarAgendamentos(); // Carrega os agendamentos do cliente
  }

  carregarAgendamentos() {
    this.agendamentos = this.agendamentoService.obterAgendamentos(); // Obtém todos os agendamentos
  }

  excluirAgendamento(index: number) {
    this.agendamentoService.excluirAgendamento(index); // Chama o método de exclusão
    this.carregarAgendamentos(); // Atualiza a lista de agendamentos após a exclusão
  }
}
