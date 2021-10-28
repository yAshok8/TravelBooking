import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingController
      .create({
        keyboardClose: true,
        message: 'Logging In...',
        spinner: 'circles',
      })
      .then((el) => {
        el.present();
        setTimeout(() => {
          this.isLoading = false;
          el.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 500);
      });
  }

  onLogout() {
    this.authService.logout();
  }
}
