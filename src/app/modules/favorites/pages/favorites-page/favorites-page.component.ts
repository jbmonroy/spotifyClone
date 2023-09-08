import { Component, OnInit, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  tracks: TrackModel[] = [];
  private _tracksService = inject(TracksService);

  ngOnInit(): void {
    this.getTracks();
  }

  private getTracks(): void {
    this._tracksService.dataTracksTrending$().subscribe({
      next: (tracks: any) => {
        this.tracks = tracks;
      }
    });
  }
}
