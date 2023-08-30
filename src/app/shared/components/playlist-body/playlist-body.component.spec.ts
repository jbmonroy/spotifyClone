import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistBodyComponent } from './playlist-body.component';

describe('PlaylistBodyComponent', () => {
  let component: PlaylistBodyComponent;
  let fixture: ComponentFixture<PlaylistBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaylistBodyComponent]
    });
    fixture = TestBed.createComponent(PlaylistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
