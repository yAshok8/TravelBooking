import { CreateBookingPage } from './../../../create-booking/create-booking.page';

import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramsMap) => {
      if (!paramsMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramsMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.actionSheetController
      .create({
        header: 'Choose An Action',
        buttons: [
          {
            text: 'Select Date',
            // icon: 'calendar-outline',
            handler: () => {
              this.openBookingModal('select');
            },
          },
          {
            text: 'Random Date',
            // icon: 'calendar-number-outline',
            handler: () => {
              this.openBookingModal('random');
            },
          },
          {
            text: 'Cancel',
            // icon: 'cancel',
            role: 'destructive',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
        ],
      })
      .then((actionSheetEl) => {
        actionSheetEl.present();
      });
  }

  openBookingModal(mode: 'select' | 'random'){
    this.modalCtrl
    .create({component: CreateBookingPage, componentProps: {selectedPlace: this.place}})
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm'){
        console.log('book place button was clicked!');
      }
    });
  }
}
