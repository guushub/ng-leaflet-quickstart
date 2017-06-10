import { Component } from '@angular/core';

// components
import { MapPanelLeftComponent } from './components/map-panel/map-panel-left/map-panel-left.component';

// services
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
    // Div should be ready, so now we can finally construct the map.
    this.mapMainService.setMap("map-main"); 
  }

}
