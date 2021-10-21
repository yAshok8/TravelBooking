import { CreateBookingPage } from './../../../bookings/create-booking/create-booking.page';
import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

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
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      if(!paramsMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramsMap.get('placeId'));
    });
  }

  onBookPlace() {
    console.log('onBookPlace() clicked');
    // this.navCtrl.navigateBack('/');
    this.modalCtrl
    .create({component: CreateBookingPage})
    .then(modal => {
      modal.present();
    });
  }
}
