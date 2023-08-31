import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  private subList$: Subscription[] = [];
  
  private _multimediaService = inject(MultimediaService); 

  ngOnInit(): void {
    this.subList$.push(
      this._multimediaService.callback.subscribe(
        (track:TrackModel)=>{
          console.log('Recibiendo track',track);
          
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subList$.forEach(sub=>sub.unsubscribe());
  }

}
