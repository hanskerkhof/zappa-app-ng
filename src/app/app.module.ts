import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlbumsComponent } from './albums/albums.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, AlbumsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LazyLoadImageModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            //// Register the ServiceWorker as soon as the app is stable
            //// or after 30 seconds (whichever comes first).
            // registrationStrategy: 'registerWhenStable:30000'
            registrationStrategy: 'registerWithDelay:1500',
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
