import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa') mapa: ElementRef;

  constructor() { }

  ngOnInit() {
    /* console.log(this.coords); */
  }

  ngAfterViewInit() {
    const latlng = this.coords.split(',');
    const lat = Number(latlng[0]);
    const lng = Number(latlng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbmNyZXNwbyIsImEiOiJjbDB2Yjc3aGwwNjB6M2lqbnJkM2RjYm1pIn0.KS6SKICYxxoUDKqLcUVo_g';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);
  }
}
