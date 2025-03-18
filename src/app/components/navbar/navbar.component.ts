import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  nome: string = 'Seu Nome';
  titulo: string = 'Desenvolvedor Full Stack';
  descricao: string = 'Breve descrição sobre você, suas habilidades e experiência.';
}