import { Component } from '@angular/core';

import { MapMainService } from './services/map/map-main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor (private mapMainService: MapMainService) {

  }

  ngOnInit() {
        const map = L.map("map-main", {
            zoomControl: false,
            center: L.latLng(54, 5),
            zoom: 6,
            layers: [this.mapMainService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: "topright" }).addTo(map);
        L.control.layers(this.mapMainService.baseMaps).addTo(map);
        L.control.scale().addTo(map);

        this.mapMainService.map = map;
  }
}
