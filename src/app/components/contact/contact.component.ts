import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from '../../components/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';
  
  socialLinks = {
    linkedin: 'https://linkedin.com/in/seu-perfil',
    facebook: 'https://facebook.com/seu-perfil',
    instagram: 'https://instagram.com/seu-perfil',
    github: 'https://github.com/seu-usuario'
  };

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
      
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.isSuccess = true;
          this.contactForm.reset();
          setTimeout(() => this.isSuccess = false, 5000);
        },
        error: (error: any) => {
          this.isSubmitting = false;
          this.errorMessage = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.';
          console.error('Erro ao enviar email:', error);
        }
      });
    }
  }
}