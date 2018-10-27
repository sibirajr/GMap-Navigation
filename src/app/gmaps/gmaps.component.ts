import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})

export class GMapsComponent implements OnInit {
  @ViewChild('googleMap')
  gmapElement: any;
  map: google.maps.Map;
  directionsService: any;
  directionsDisplay: any;
  lat: any;
  lng: any;
  autocompleteFrom: any;
  autocompleteTo: any;
  countryRestrict: any;
  places: any;
  from: any;

  ngOnInit() {
    this.countryRestrict = { country: 'IN' };
    var mapProp = {
      center: new google.maps.LatLng(13.0827, 80.2707),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      // mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(
      document.getElementById('CompleteDirection')
    );
    this.autocompleteFrom = new google.maps.places.Autocomplete(
      <HTMLInputElement>document.getElementById('autocompleteFrom'),
      {
        types: ['(cities)'],
        componentRestrictions: this.countryRestrict
      }
    );
    this.autocompleteTo = new google.maps.places.Autocomplete(
      <HTMLInputElement>document.getElementById('autocompleteTo'),
      {
        types: ['(cities)'],
        componentRestrictions: this.countryRestrict
      }
    );
    this.places = new google.maps.places.PlacesService(this.map);
  }

  search() {
    var place = this.autocompleteFrom.getPlace();
    var placeTo = this.autocompleteTo.getPlace();
    if (place.geometry) {
      this.map.panTo(place.geometry.location);
      this.map.setZoom(15);
      var request = {
        origin: place.formatted_address,
        destination: placeTo.formatted_address,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      };
      this.directionsService.route(
        request,
        function(response, status) {
          if (status === 'OK') {
            this.directionsDisplay.setDirections(response);
          }
        }.bind(this)
      );
    }
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.map.setCenter(pos);
          var marker = new google.maps.Marker({ position: pos });
          marker.setMap(this.map);
        }.bind(this)
      );
    }
  }

  wayPointsSearch() {
    let waypts: way[];
    waypts = new Array<way>();
    waypts.push({
      location: 'Poonamallee, Chennai, Tamil Nadu',
      stopover: true
    });

    waypts.push({
      location: 'Maduravoyal, Chennai, Tamil Nadu',
      stopover: true
    });
    var request = {
      origin: 'Porur, Chennai, Tamil Nadu',
      destination: 'Avadi, Tamil Nadu',
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    };
    this.directionsService.route(
      request,
      function(response, status) {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        }
      }.bind(this)
    );
  }
}

class way {
  location: string;
  stopover: boolean;
}
