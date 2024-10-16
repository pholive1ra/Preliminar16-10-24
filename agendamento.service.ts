import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private agendamentosKey = 'agendamentos'; // Chave para o Local Storage

  constructor() {}

  // Método para adicionar um agendamento
  adicionarAgendamento(agendamento: any) {
    const agendamentos = this.obterAgendamentos(); // Obtém os agendamentos existentes
    agendamentos.push(agendamento); // Adiciona o novo agendamento
    localStorage.setItem(this.agendamentosKey, JSON.stringify(agendamentos)); // Salva os agendamentos no Local Storage
  }

  // Método para obter todos os agendamentos
  obterAgendamentos() {
    const agendamentos = localStorage.getItem(this.agendamentosKey);
    return agendamentos ? JSON.parse(agendamentos) : []; // Retorna os agendamentos ou um array vazio se não houver
  }

  // Método para obter agendamentos filtrados pelo UID do barbeiro
  obterAgendamentosPorBarbeiro(uid: string) {
    const agendamentos = this.obterAgendamentos();
    return agendamentos.filter((agendamento: any) => agendamento.barbeiroUID === uid);
  }

  // Método para excluir um agendamento
  excluirAgendamento(index: number) {
    const agendamentos = this.obterAgendamentos(); // Obtém os agendamentos existentes
    agendamentos.splice(index, 1); // Remove o agendamento pelo índice
    localStorage.setItem(this.agendamentosKey, JSON.stringify(agendamentos)); // Salva os agendamentos atualizados no Local Storage
  }
}
