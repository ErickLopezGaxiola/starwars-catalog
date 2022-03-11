import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MovieComponent } from './movie/movie.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeworldComponent } from './homeworld/homeworld.component';
import { RelatedfilmsComponent } from './relatedfilms/relatedfilms.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    MovieComponent,
    CharacterComponent,
    HomeworldComponent,
    RelatedfilmsComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
