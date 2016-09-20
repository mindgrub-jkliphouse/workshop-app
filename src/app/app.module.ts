import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import {Routes, RouterModule, Router} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'selection', component: SelectionScreenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SelectionScreenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
