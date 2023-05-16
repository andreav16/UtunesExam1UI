import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumInfoComponent } from './album-info/album-info.component';

const routes: Routes = [
  {path: 'albums',component:AlbumsComponent},
  {path: 'albums/:id', component: AlbumInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
