import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AgendamentoService } from '../agendamento.service'; // Importando o serviço

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  showServices: boolean = false; // Controla a exibição dos serviços
  selectedService: string | null = null; // Armazena o serviço selecionado
  selectedBarber: string | null = null; // Armazena o barbeiro selecionado
  selectedTime: string | null = null; // Armazena o horário selecionado
  showSchedule: boolean = false; // Controla a exibição da agenda

  // Horários disponíveis para cada barbeiro
  barberSchedule: { [key: string]: string[] } = {
    'Geovanne': ['10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '17:00'],
    'Ricardo': ['09:00', '09:30', '10:00', '10:30', '15:00', '15:30', '16:30', '18:00'],
  };

  constructor(
    private toastController: ToastController, 
    private router: Router, 
    private agendamentoService: AgendamentoService // Injeta o serviço de agendamento
  ) {}

  ngOnInit() {}

  // Método para alternar a exibição dos serviços
  toggleServices() {
    this.showServices = !this.showServices;
    this.selectedService = null; // Resetar a seleção de serviço
    this.selectedBarber = null; // Resetar a seleção de barbeiro
    this.selectedTime = null; // Resetar a seleção de horário
    this.showSchedule = false; // Resetar a exibição da agenda
  }

  // Método para selecionar um serviço
  selectService(service: string) {
    this.selectedService = service;
    this.showSchedule = false; // Resetar a exibição da agenda
  }

  // Método para selecionar um barbeiro
  selectBarber(barber: string) {
    this.selectedBarber = barber;
    this.showSchedule = true; // Mostrar a agenda ao selecionar um barbeiro
  }

  // Método para selecionar um horário
  selectTime(time: string) {
    this.selectedTime = time; // Armazena o horário selecionado
  }

  // Método para resetar as seleções
  resetSelections() {
    this.selectedService = null;
    this.selectedBarber = null;
    this.selectedTime = null;
    this.showSchedule = false;
    this.showServices = true; // Retorna para a exibição de serviços
  }

  async agendar() {
    if (this.selectedTime && this.selectedBarber) {
      const barbeiroUID = this.selectedBarber === 'Geovanne' ? 'NYHKdxxdoKcJgqJou5ptMl3b94E3' : 'iGLtkzJxMcf5I3uCTcqHnwKUnvN2';
      
      const agendamento = {
        barbeiro: this.selectedBarber,
        barbeiroUID: barbeiroUID,  // Adiciona o UID do barbeiro
        horario: this.selectedTime,
        data: new Date().toISOString().split('T')[0], // Usando a data atual
        servico: this.selectedService // Adiciona o serviço ao agendamento
      };
  
      this.agendamentoService.adicionarAgendamento(agendamento);
  
      const toast = await this.toastController.create({
        message: `Agendado com sucesso para ${this.selectedBarber} às ${this.selectedTime}.`,
        duration: 3000,
        position: 'bottom',
        color: 'success',
        buttons: [
          {
            text: 'Fechar',
            role: 'cancel',
          },
        ],
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: `Por favor, selecione um barbeiro e um horário.`,
        duration: 3000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }

  goToMyAppointments() {
    this.router.navigate(['/meus-agendamentos']); // Altere o caminho se necessário
  }
}
