import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyExampleComponent } from './spotify-example/spotify-example.component';
import { BasedOnComponent } from './based-on/based-on.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherGithub, featherRss } from '@ng-icons/feather-icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HiringExampleComponent } from './hiring-example/hiring-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyExampleComponent,
    BasedOnComponent,
    TitleComponent,
    HiringExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({featherGithub, featherRss}),
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
