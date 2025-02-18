import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if(username === 'kevin' && password === '1234') {
      this.isLogged = true;
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logOut(): void {
    this.isLogged = false;
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
