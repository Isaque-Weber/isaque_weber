import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
  projetos = [
    {
      id: 1,
      titulo: 'Projeto 1',
      descricao: 'Breve descrição do projeto 1',
      imagem: 'assets/images/projeto1.jpg',
      link: 'https://github.com/seu-usuario/projeto1'
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      descricao: 'Breve descrição do projeto 2',
      imagem: 'assets/images/projeto2.jpg',
      link: 'https://github.com/seu-usuario/projeto2'
    },
    {
      id: 3,
      titulo: 'Projeto 3',
      descricao: 'Breve descrição do projeto 3',
      imagem: 'assets/images/projeto3.jpg',
      link: 'https://github.com/seu-usuario/projeto3'
    },
    {
      id: 4,
      titulo: 'Projeto 4',
      descricao: 'Breve descrição do projeto 4',
      imagem: 'assets/images/projeto4.jpg',
      link: 'https://github.com/seu-usuario/projeto4'
    },
    {
      id: 5,
      titulo: 'Projeto 5',
      descricao: 'Breve descrição do projeto 5',
      imagem: 'assets/images/projeto5.jpg',
      link: 'https://github.com/seu-usuario/projeto5'
    }
  ];

  ngOnInit() {
    register();
  }
}