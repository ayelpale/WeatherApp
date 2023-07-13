import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SpeakDirective } from './Directives/speak.directive';
import { TooltipDirective } from './Directives/tooltip.directive';
import { TooltipComponentComponent } from './common/tooltip-component/tooltip-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SpeakDirective,
    TooltipDirective,
    TooltipComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
