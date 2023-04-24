import { Component, OnInit } from '@angular/core';

declare var google: any;


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit{


  options: any;
  infoWindow: any;
  overlays!: any[];

  ngOnInit() {
    this.options = {
      center: {lat: 1.2783154, lng: 103.85124},
      zoom: 15
  };

      this.overlays = [
        new google.maps.Marker({position: {lat: 1.2783154, lng: 103.8487085}, title:"Office"}),

    ];  
    this.infoWindow = new google.maps.InfoWindow();

  }

}


