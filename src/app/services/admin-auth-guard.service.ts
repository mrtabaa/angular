import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot) {
    const user = this.authService.CurrentUser;
    if (user && user.admin) {
      return true;
    }

    if (this.authService.isLoggedIn()) // check if the user is loggedIn()
    {
      this.router.navigate(['/no-access']);
      console.log('ADMIN');
      return false;
    }
  }
}
