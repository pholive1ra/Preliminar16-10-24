import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule} from 'ngx-mask';
import { SurveyService } from './survey.service'; // Importa o serviço

// Firebase Imports
import { initializeApp } from 'firebase/app'; // Importação do Firebase
import { getAuth } from 'firebase/auth'; // Importação para autenticação
import { getFirestore } from 'firebase/firestore'; // Importação para Firestore
import { environment } from '../environments/environment'; // Suas configurações do Firebase

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, // Importa o HttpClientModule para uso em APIs
    NgxMaskModule.forRoot() // Importa o módulo da máscara
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SurveyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Inicializando o Firebase App com as configurações do environment.ts
    const app = initializeApp(environment.firebaseConfig);
    
    // Inicializando serviços do Firebase
    getAuth(app); // Inicializa o serviço de autenticação
    getFirestore(app); // Inicializa o Firestore
  }
}
