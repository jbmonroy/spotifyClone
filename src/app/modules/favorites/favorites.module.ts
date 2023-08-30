import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { PlaylistHeaderComponent } from '@shared/components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from '@shared/components/playlist-body/playlist-body.component';


@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    PlaylistHeaderComponent,
    PlaylistBodyComponent
  ]
})
export class FavoritesModule { }
