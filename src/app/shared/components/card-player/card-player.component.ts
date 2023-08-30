import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive'

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

}
