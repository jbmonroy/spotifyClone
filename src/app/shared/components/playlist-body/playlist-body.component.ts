import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataMock from '../../../data/tracks.data.json';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-playlist-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe, ImgBrokenDirective],
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {
  tracks: TrackModel[] = [];
  sort: { property: string | null, order: string } = { property: null, order: 'asc' };
  private _tracksService = inject(TracksService);

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    this._tracksService.dataTracksTrending$.subscribe({
      next: (tracks:TrackModel[])=>{
        this.tracks = tracks;
      }
    });

  }

  changeSort(property: string = 'name'): void {
    const { order } = this.sort;
    this.sort = {
      property: property,
      order: order === 'asc'? 'desc':'asc'
    }

  }

}
