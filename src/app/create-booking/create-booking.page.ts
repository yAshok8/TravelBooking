import { Place } from './../places/place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.page.html',
  styleUrls: ['./create-booking.page.scss'],
})
export class CreateBookingPage implements OnInit {

  @Input() selectedPlace: Place;

  public createBookingForm: FormGroup;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('coming here');
    this.createBookingForm = new FormGroup({
      firstName: new FormControl('Ashok', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lastName: new FormControl('Yadav', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      guestNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      fromDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      toDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

  onSubmit() {
    console.log(this.createBookingForm);
  }

}
