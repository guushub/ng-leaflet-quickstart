import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';

// services
import { MapMainService } from './services/map/map-main.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MapMainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
