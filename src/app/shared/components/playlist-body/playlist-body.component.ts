import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataMock from '../../../data/tracks.data.json';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';

@Component({
  selector: 'app-playlist-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {
  tracks: Array<TrackModel> = [];
  sort: { property: string | null, order: string } = { property: null, order: 'asc' };

  ngOnInit(): void {
    this.getTracks();
  }

  getTracks(): void {
    const { data } = (dataMock as any).default;
    this.tracks = data;
  }

  changeSort(property: string = 'name'): void {
    const { order } = this.sort;
    this.sort = {
      property: property,
      order: order === 'asc'? 'desc':'asc'
    }

  }

}
