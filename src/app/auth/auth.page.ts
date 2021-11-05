import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  public isLoading = false;
  public isLogin = true;

  public headerRow: any[];
  public csvData: any[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private papa: Papa,
    // private http: HttpClient
  ) {
    // this.loadCSV();
  }


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
    if (!localFormRef.valid) {
      return;
    }

    const email = localFormRef.value.email;
    const password = localFormRef.value.password;

    if (this.isLogin) {
      //send login server request
    } else {
      //send signup server request
    }
  }

  switchModes() {
    this.isLogin = !this.isLogin;
  }

  // private loadCSV() {
  //   this.http.get('./assets/expense.csv', {
  //     responseType: 'text'
  //   }).subscribe(
  //     data => this.extractData(data),
  //     err => console.log('error: ', err)
  //   );
  // }

  // private extractData(res) {
  //   const data = res || '';
  //   this.papa.parse(data, {
  //     complete: parseData => {
  //       // console.log(parseData.data);
  //       // console.log(parseData.data.splice(0,1));
  //       // console.log(parseData.data);
  //       this.headerRow = parseData.data.splice(0,1)[0];
  //       this.csvData = parseData.data;
  //     }
  //   });
  // }

}
