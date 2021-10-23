import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
  }

  onEdit(placeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', placeId]);
    // console.log('Editing place :'+placeId);
  }

  onDelete(placeId: string) {
    console.log('Deleting place :'+placeId);
  }

}
