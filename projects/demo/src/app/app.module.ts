import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxLeafletCoordinatesModule } from '@timmy73/ngx-leaflet-coordinates';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    NgxLeafletCoordinatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
