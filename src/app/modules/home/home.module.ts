import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ]
})
export class HomeModule { }
