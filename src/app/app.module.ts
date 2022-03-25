import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ParentListComponent } from './parent-list/parent-list.component';
//import { ParentListComponent } from './parent-list/parent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //ParentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ParentListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
