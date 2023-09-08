import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from './favorites-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlaylistHeaderComponent } from '@shared/components/playlist-header/playlist-header.component';
import { PlaylistBodyComponent } from '@shared/components/playlist-body/playlist-body.component';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        PlaylistHeaderComponent,
        PlaylistBodyComponent
      ],
      declarations: [FavoritesPageComponent]
    });
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
