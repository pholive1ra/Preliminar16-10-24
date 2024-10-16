import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://api-sua-url/feedback'; // Verifique se esta URL está correta

  constructor(private http: HttpClient) {}

  enviarFeedback(feedback: any): Observable<any> {
    return this.http.post(this.apiUrl, feedback).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao enviar feedback:', error);
    return throwError('Erro ao enviar feedback. Tente novamente.');
  }
}
