import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.data.json';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor() { 
    const { data }:any = (dataRaw as any).default;
    
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer)=>{
      const track: TrackModel[] = [{
        _id:'9',
        name: 'Leve',
        album:'Cartel de Santa',
        url:'https://',
        cover:'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
        artist:{
          name:'Cartel de Santa',
          nationality:'MX',
          nickname: 'Cartel de Santa'
        },
        duration:null
      }]
      setTimeout(()=>observer.next(track), 3500);
    });
  }
}
