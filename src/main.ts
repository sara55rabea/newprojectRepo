import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Import this
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routes } from './app/app.routes'; // Import your routes

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter(routes) // Provide the Router to fix ActivatedRoute error
  ]
}).catch(err => console.error(err));
