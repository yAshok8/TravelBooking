import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
    console.log(this.loadedBookings);
  }

  onCancelBooking(bookingId: string, bookingSliding: IonItemSliding){
    bookingSliding.close();
    console.log('Cancel booking id '+bookingId);
  }

}
