import { Place } from './place.model';
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NY City',
      'https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_960_720.jpg',
      178.11
    ),
    new Place(
      'p2',
      'Dharkhadi Dam',
      'The heaven of Dahisar',
      'https://i.ytimg.com/vi/-e74z2OWDFM/maxresdefault.jpg',
      6.5
    ),
    new Place(
      'p3',
      'Varanasi',
      'The land of Hindu Temples',
      'https://www.reviewofreligions.org/wp-content/uploads/2020/08/Varanasi-1-1024x1024.jpg',
      20.5
    ),

  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
