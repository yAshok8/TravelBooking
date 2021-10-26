/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings: Booking[] = [
    {
      id: 'abc',
      placeId: 'p1',
      userId: 'u1',
      placeTitle: 'Dharkhadi Dam',
      guestsNums: 7
    },
  ];

  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
