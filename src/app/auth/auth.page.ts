import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public isLoading = false;
  public isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter() is called');
  }

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

  onSubmit(localFormRef: NgForm) {
    console.log(localFormRef);
    if(!localFormRef.valid) {
      return;
    }

    const email = localFormRef.value.email;
    const password = localFormRef.value.password;

    if (this.isLogin){
      //send login server request
    }else{
      //send signup server request
    }

  }

  switchModes() {
    this.isLogin = !this.isLogin;
  }
}
