import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { DevelopersDetailsComponent } from './developers-details/developers-details.component';

@NgModule({ //decorator - index file
  declarations: [
    AppComponent,
    DevelopersListComponent,
    DevelopersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
