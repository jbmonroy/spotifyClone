import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';
import { PlaylistBodyComponent } from '@shared/components/playlist-body/playlist-body.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    PlaylistBodyComponent,
    FormsModule
  ]
})
export class HistoryModule { }
