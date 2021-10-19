import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    console.log('onBookPlace() clicked');
    this.navCtrl.navigateBack('/');
  }
}
