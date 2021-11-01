import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  public place: Place;
  public editForm: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.get('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
      this.editForm = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        }),
        price: new FormControl(this.place.price, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }),
        dateFrom: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        dateTo: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
    });
  }

  onEditOffer() {
    if (!this.editForm.valid) {
      return;
    }
    console.log(this.editForm);
  }
}
