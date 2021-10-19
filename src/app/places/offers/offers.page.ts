import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
  }

}
