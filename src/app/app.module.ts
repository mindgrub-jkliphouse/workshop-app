import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import {Routes, RouterModule, Router} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterNameComponent } from './character-name/character-name.component';
import { ArchetypeFilterComponent } from './archetype-filter/archetype-filter.component';
import { ArchetypeListComponent } from './archetype-list/archetype-list.component';
import { ArchetypeCardComponent } from './archetype-card/archetype-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';

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
    NavbarComponent,
    CharacterNameComponent,
    ArchetypeFilterComponent,
    ArchetypeListComponent,
    ArchetypeCardComponent,
    SearchBarComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
