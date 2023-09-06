import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  private subList$: Subscription[] = [];
  public status: string = 'pause';
  public _multimediaService = inject(MultimediaService);
  @ViewChild('progressBar')progressBar:ElementRef = new ElementRef('');

  ngOnInit(): void {
    this.subList$.push(
      this._multimediaService.playerStatus$.subscribe(
        (status:string)=>{
          this.status = status;
        }
      )
    );  
  }

  ngOnDestroy(): void {
    this.subList$.forEach(item=>item.unsubscribe());
  }

  handlePosition(evt:MouseEvent): void {
    const { clientX } = evt;
    const { nativeElement } = this.progressBar;
    const { x, width } = nativeElement.getBoundingClientRect();
    const clickX = clientX - x;
    const percentage = (clickX * 100)/width;
    this._multimediaService.playerPercentage$.next(percentage);
    this._multimediaService.seekAudio(percentage);
  }


}
