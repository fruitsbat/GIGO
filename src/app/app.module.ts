import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyExampleComponent } from './spotify-example/spotify-example.component';
import { BasedOnComponent } from './based-on/based-on.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherGithub, featherRss, featherInfo, featherRotateCw, featherCheck, featherX, featherPlayCircle, featherSearch } from '@ng-icons/feather-icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HiringExampleComponent } from './hiring-example/hiring-example.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AudiocalcComponent } from './audiocalc/audiocalc.component';
import { SearchExampleComponent } from './search-example/search-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyExampleComponent,
    BasedOnComponent,
    TitleComponent,
    HiringExampleComponent,
    CalculatorComponent,
    AudiocalcComponent,
    SearchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({featherGithub, featherRss, featherInfo, featherRotateCw, featherX, featherCheck, featherPlayCircle, featherSearch}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
