import { Component, OnInit, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit{
  private subsList$: Subscription[]= [];
  private _tracksService = inject(TracksService); 
  randomTracks: TrackModel[] = [];
  trendingTracks: TrackModel[] = [];

  ngOnInit(): void {
    this.subsList$.push(
      this._tracksService.dataTracksTrending$().subscribe( {
        next: (tracks:TrackModel[])=>{
          this.trendingTracks =  tracks;
          console.log(typeof this.randomTracks);
          
        }
      }) 
    );

    this.subsList$.push(
      this._tracksService.dataTracksRandom$().subscribe(
        (tracks:TrackModel[])=>{
          this.randomTracks = [...this.randomTracks, ...tracks];
          console.log('Random in->', tracks);
                
        }
      ) 
    );
  }

  ngOnDestroy(): void {
    this.subsList$.forEach(sub=>sub.unsubscribe());
  }
}
