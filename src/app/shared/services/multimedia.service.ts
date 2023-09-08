import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('pause');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(
      res => {
        if (res) {
          this.setAudio(res);
        }
      }
    );
    this.listenAllEvents();
  }

  public setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('end', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (state:any)=>{
    this.playerStatus$.next(state.type);
  }

  private calculateTime = ()=>{
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
    this.setPrecentage(currentTime,duration);
  }

  private setTimeElapsed(currentTime:number):void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime/60) % 60);
    const displaySeconds = seconds<10?`0${seconds}`:seconds;
    const displayMinutes = minutes<10?`0${minutes}`:minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat); 
  }

  private setTimeRemaining(currentTime:number, duration:number): void {
    let seconds = Math.floor((duration - currentTime) % 60);
    let minutes = Math.floor(((duration - currentTime)/60) % 60);
    const displaySeconds = seconds<10?`0${seconds}`:seconds;
    const displayMinutes = minutes<10?`0${minutes}`:minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);
  }

  public togglePlayer():void {
    this.audio.paused? this.audio.play():this.audio.pause();
  }

  private setPrecentage(currentTime: number, duration:number): void {
    let currentPercentage = (currentTime*100)/duration;
    this.playerPercentage$.next(currentPercentage);
  } 

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const currentTime = duration * (percentage/100);
    this.audio.currentTime = currentTime;
  }
}
