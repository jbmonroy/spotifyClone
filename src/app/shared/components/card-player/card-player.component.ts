import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive'
import { MultimediaService } from '@shared/services/multimedia.service';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input()mode: 'small' | 'big' = 'small';
  @Input()track: any = '';
  private _multimediaService = inject(MultimediaService);

  sendPlay(track: TrackModel): void {
    this._multimediaService.trackInfo$.next(track);
  }
}
