import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, CommonModule,  RouterModule, FooterComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;


  public sidebarItems = [

    { label: 'Inicio', icon: 'home', url: '/home' },
    { label: 'Empleados', icon: 'group', url: '/employees' },
    { label: 'Reportes', icon: 'bar_chart', url: '/reports' },
    { label: 'Cerrar sesión', icon: 'logout', action: 'logout' }
  ];

  constructor(private router: Router, ) {}

  toggleSidenav() {
    if(this.sidenav) {
      this.sidenav.toggle();
    }else{
      console.log("Error. El sidenav no está definido");

    }
  }
  navigateHome() {
    this.router.navigate(['/home']);
    this.sidenav.close();
  }


  navigate(item: any) {
    if (item.action === 'logout') {
      this.logout();
    } else {
      this.router.navigate([item.url]);
      this.sidenav.close();
    }
  }

  logout() {
    console.log("Cerrando sesión...");
    this.router.navigate(['/login']);
  }
}
