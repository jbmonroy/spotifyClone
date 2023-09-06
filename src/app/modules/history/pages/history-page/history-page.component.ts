import { Component, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  private _searchService = inject(SearchService);
  tracks$:Observable<any> = of([]);

  reciveData(evt:string): void {
    this.tracks$ = this._searchService.searchTracks$(evt);
  }

}
