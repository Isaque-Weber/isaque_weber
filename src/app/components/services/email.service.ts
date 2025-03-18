// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  nome: string;
  email: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Substitua pela URL do seu backend ou serviço de email
  private emailApiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  
  constructor(private http: HttpClient) { }
  
  sendEmail(formData: ContactFormData): Observable<any> {
    // Exemplo usando EmailJS (você precisará se registrar em emailjs.com)
    const emailData = {
      service_id: 'seu_service_id',
      template_id: 'seu_template_id',
      user_id: 'seu_user_id',
      template_params: {
        from_name: formData.nome,
        reply_to: formData.email,
        message: formData.mensagem
      }
    };
    
    return this.http.post(this.emailApiUrl, emailData);
  }
}