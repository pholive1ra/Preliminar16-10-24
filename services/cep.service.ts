// src/app/services/cep.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws/'; // URL da API ViaCEP

  constructor(private http: HttpClient) {}

  // Método para buscar o endereço pelo CEP
  getEndereco(cep: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${cep}/json/`);
  }
}
