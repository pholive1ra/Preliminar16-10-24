import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  email: string = '';
  password: string = '';
  nome: string = '';
  telefone: string = '';
  cep: string = '';
  endereco: string = '';

  private auth: Auth;

  constructor(private http: HttpClient, private toastController: ToastController, private navCtrl: NavController) { 
    this.auth = getAuth(); // Inicializa o auth
  }

  // Função para buscar o endereço com base no CEP
  buscarEnderecoPorCEP() {
    if (this.cep.length === 8) { // Verifica se o CEP tem 8 dígitos
      this.http.get<any>(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe(
          (dados) => {
            if (!dados.erro) {
              this.endereco = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade} - ${dados.uf}`;
            } else {
              alert('CEP não encontrado.');
            }
          },
          (erro) => {
            console.log('Erro ao buscar o CEP:', erro);
          }
        );
    }
  }

  // Função para mostrar o Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duração do toast em milissegundos
      position: 'top', // Posição do toast
      color: 'danger', // Cor do toast
      animated: true,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        }
      ]
    });
    await toast.present(); // Aguarda a apresentação do toast
  }

  // Função para mostrar o Toast de sucesso
  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2000, // Duração do toast em milissegundos
      position: 'top', // Posição do toast
      color: 'success', // Cor do toast
      animated: true,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        }
      ]
    });
    await toast.present(); // Aguarda a apresentação do toast
  }

  // Função de cadastro do usuário
  async onSubmit(form: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Cadastro bem-sucedido:', userCredential.user);
      
      // Apresenta o Toast de sucesso
      await this.presentSuccessToast();
      
      // Redireciona para a tela de login
      this.navCtrl.navigateRoot('/login'); // Altere '/login' para o caminho correto da sua página de login
      
      // Aqui você pode salvar mais informações no Firestore se necessário
    } catch (error: any) {
      // Verifica se o erro é uma instância de Error e se tem a propriedade code
      if (error && error.code) {
        if (error.code === 'auth/email-already-in-use') {
          await this.presentToast('Este e-mail já está cadastrado.');
        } else {
          console.error('Erro ao cadastrar:', error.message);
          await this.presentToast('Erro ao fazer cadastro, Verifique todos campos');
        }
      } else {
        console.error('Erro desconhecido ao cadastrar:', error);
        await this.presentToast('Erro desconhecido ao fazer cadastro.');
      }
    }
  }
}
