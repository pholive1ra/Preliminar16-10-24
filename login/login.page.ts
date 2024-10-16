import { Component } from '@angular/core';
import { Auth } from 'firebase/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  private auth: Auth;

  constructor(private router: Router) {
    this.auth = getAuth();
  }

  async onLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      // Verifica o UID do usuário
      if (user.uid === 'NYHKdxxdoKcJgqJou5ptMl3b94E3' || user.uid === 'iGLtkzJxMcf5I3uCTcqHnwKUnvN2') {
        // Redireciona para a tela dos barbeiros
        this.router.navigate(['/area-barbeiro']); // Substitua pelo caminho correto
      } else {
        // Redireciona para a tela de clientes
        this.router.navigate(['/agendamento']); // Substitua pelo caminho correto
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);

      // Verifica se error é uma instância de Error
      if (error instanceof Error) {
        alert('Erro ao fazer login: ' + error.message);
      } else {
        alert('Erro desconhecido ao fazer login.');
      }
    }
  }
}
