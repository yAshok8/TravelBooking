import { Place } from './../../place.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.page.html',
  styleUrls: ['./offer-item.page.scss'],
})
export class OfferItemPage implements OnInit {

  @Input() offer: Place;

  constructor() { }

  ngOnInit() {
  }

  getDummyDate() {
    return new Date();
  }

}
