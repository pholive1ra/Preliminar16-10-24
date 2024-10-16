import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUID(): string | null {
    const auth = getAuth();
    const user = auth.currentUser; // Obtém o usuário atual
    return user ? user.uid : null; // Retorna o UID ou null se não houver usuário logado
  }
}
