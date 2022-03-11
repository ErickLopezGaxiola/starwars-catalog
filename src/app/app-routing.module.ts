import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CharacterComponent } from './character/character.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: CatalogComponent, pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'character/:id', component: CharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
