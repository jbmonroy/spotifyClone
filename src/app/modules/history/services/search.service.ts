import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly API = `${environment.NODE_API}/tracks`
  private httpClient = inject(HttpClient);
  
  constructor() { }

  searchTracks$(term:string):Observable<any> {
    return this.httpClient.get(`${this.API}?src=${term}`).pipe(
      map((dataRaw:any)=>dataRaw.data),
      catchError((err:any)=>{
        console.error('ERROR:',err);
        return of([]);
      })
    );
  }

}
