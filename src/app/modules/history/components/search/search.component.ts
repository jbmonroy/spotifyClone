import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src:string = '';
  search(evt:string): void {
    if (evt.length >= 3){
      this.callbackData.emit(evt);
    }
  }
}
