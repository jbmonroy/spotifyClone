import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor() { }

  callback: EventEmitter<any> =  new EventEmitter();
}
