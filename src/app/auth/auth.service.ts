/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;

  get isUserAuthenticated() {
    return this._isUserAuthenticated;
  }

  constructor(private router: Router) { }

  login() {
    this._isUserAuthenticated = true;
    this.router.navigateByUrl('/places/tabs/discover');
  }

  logout() {
    this._isUserAuthenticated = false;
  }
}
