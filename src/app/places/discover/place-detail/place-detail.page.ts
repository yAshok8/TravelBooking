import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    private placeService: PlacesService
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
    this.navCtrl.navigateBack('/');
  }
}
