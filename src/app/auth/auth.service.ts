/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;

  get isUserAuthenticated() {
    return this._isUserAuthenticated;
  }

  constructor() { }

  login(){
    this.isUserAuthenticated = true;
  }

  logout(){
    this.isUserAuthenticated = false;
  }
}
