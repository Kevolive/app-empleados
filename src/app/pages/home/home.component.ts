import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCard, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  blogPosts = [
    {
      title: '¿Qué es App Empleados?',
      date: '1 de Marzo, 2024',
      excerpt: 'Nuestra app ayuda a gestionar empleados de forma eficiente con herramientas modernas.',
      content: 'Aquí puedes añadir una explicación más detallada de la app, incluyendo sus funcionalidades y cómo ayuda a la empresa...'
    },
    {
      title: 'Cómo agregar empleados en la App',
      date: '15 de Febrero, 2024',
      excerpt: 'Aprende a usar nuestro sistema CRUD para gestionar a los empleados.',
      content: 'En esta publicación, explicaremos cómo agregar, editar y eliminar empleados de forma sencilla...'
    },
    {
      title: 'Cómo actulalizar empleados en la App',
      date: '15 de Febrero, 2024',
      excerpt: 'Aprende a usar nuestro sistema CRUD para actualizar a los empleados.',
      content: 'En esta publicación, explicaremos cómo agregar, editar y eliminar empleados de forma sencilla...'
    },
    {
      title: 'Cómo Eliminar empleados en la App',
      date: '15 de Febrero, 2024',
      excerpt: 'Aprende a usar nuestro sistema CRUD para actualizar a los empleados.',
      content: 'En esta publicación, explicaremos cómo agregar, editar y eliminar empleados de forma sencilla...'
    },
  ];

  readMore(post: any) {
    alert(post.content); // Esto es solo un ejemplo, podrías abrir un modal o una nueva página
  }

constructor(private router: Router) { }
navigateTo(router: string) {
    this.router.navigate(['/employees']);
    this.router.navigate(['/reports']);
  }
}
