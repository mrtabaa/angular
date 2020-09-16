import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private routeUrl: ActivatedRoute,
    private authService: AuthService,
  ) {
  }

  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(
        () => {
          const returnUrl = this.routeUrl.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        },
        // error if login info is incorrect
        error => {
          this.invalidLogin = true;

          console.log(error);
        }
      );
  }
}
