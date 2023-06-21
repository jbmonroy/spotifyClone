import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataMock from '../../../../data/tracks.data.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit{
  dataTracks: Array<TrackModel> = [];

  ngOnInit(): void {
    const { data } = (dataMock as any).default;
    this.dataTracks = data;
  }
}
