import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class HomeComponent {
  projects = [
    {
      title: 'Chatbot Nutri',
      subtitle: 'Assistente Virtual de Nutrição',
      image: '', // Deixe vazio para testar sem imagem
      description: 'Um chatbot inteligente para ajudar com dicas de nutrição e dietas personalizadas.',
      link: 'https://isaqueweber.com.br'
    },
    {
      title: 'Site da Igreja',
      subtitle: 'Portal da Comunidade',
      image: '', // Deixe vazio para testar sem imagem
      description: 'O site oficial da nossa igreja, com informações sobre eventos, sermões e muito mais.',
      link: 'https://isaqueweber.com.br'
    }
  ];

  openProject(link: string) {
    window.open(link, '_blank');
  }
}