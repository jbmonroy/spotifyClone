import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-generic-section',
  standalone: true,
  imports: [CommonModule, CardPlayerComponent],
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent {
  @Input()title: string = '';
  @Input()mode: 'small' | 'big' = 'small';
  @Input()dataTracks: TrackModel[] = [];


}
