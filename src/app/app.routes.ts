import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { authGuard } from './guards/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: '', component: LayoutComponent,
     children: [
      {path:'home', component:HomeComponent, canActivate: [authGuard]},
      {path:'employees', component:EmployeesComponent, canActivate: [authGuard]},
      {path: 'reports', component: ReportsComponent, canActivate: [authGuard]},
      {path:'**', redirectTo:'home', pathMatch:'full'}
     ]},

];
