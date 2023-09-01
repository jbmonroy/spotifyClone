import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private httpClient = inject(HttpClient);
  private readonly API = environment.NODE_API;

  constructor() { }

  dataTracksTrending$(): Observable<any> {
    return this.httpClient.get(`${this.API}/tracks`).pipe(
      map((dataRaw:any)=>dataRaw.data),
      catchError(err=>{
        console.error('ERROR:',err)
        return of([]);
      })
    )
  }
  
  dataTracksRandom$(): Observable<any> {
    return this.httpClient.get(`${this.API}/tracks`).pipe(
      mergeMap(({data}:any)=>this.skipById(data, '1')),
      catchError(err=>{
        console.error('ERROR:', err);
        return of([]);
      })
    );
  }

  skipById(listTracks:TrackModel[],  id:string):Promise<TrackModel[]> {
    return new Promise((resolve,reject)=>{
      const listTmp = listTracks.filter(a=>a._id != id)
      resolve(listTmp);

    })
  }

}
