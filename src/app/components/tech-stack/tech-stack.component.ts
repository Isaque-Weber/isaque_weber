import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechStackComponent implements OnInit {
  technologies = [
    { nome: 'Angular', logo: 'assets/images/angular-logo.png' },
    { nome: 'NodeJS', logo: 'assets/images/nodejs-logo.png' },
    { nome: 'Python', logo: 'assets/images/python-logo.png' },
    { nome: 'Pandas', logo: 'assets/images/pandas-logo.png' },
    { nome: 'OpenAI', logo: 'assets/images/openai-logo.png' },
    // Adicione mais tecnologias conforme necessário
  ];

  ngOnInit() {
    register();
  }
}