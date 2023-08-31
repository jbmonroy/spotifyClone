import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mainMenu: WritableSignal<any> = signal({
    defaultOptions: [],
    accessLink: []
  });

  customOptions: WritableSignal<any> = signal([]);

  ngOnInit(): void {
    this.setMainMenu('defaultOptions', [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/','tracks']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Library',
        icon: 'uil-chart',
        router: ['/', 'favorites']
      }
    ]);
    this.setMainMenu('accessLink', [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]);
    this.setCustomOptions();
  }

  setCustomOptions(opts:{name:string, router:string[]}[] = [
    {
      name: 'Mi Lista #1',
      router: ['/']
    },
    {
      name: 'Mi Lista #2',
      router: ['/']
    },
    {
      name: 'Mi Lista #3',
      router: ['/']
    },
    {
      name: 'Mi Lista #4',
      router: ['/']
    }
  ]):void {
    this.customOptions.set(opts);
  }

  setMainMenu(key: 'accessLink'|'defaultOptions', value: any[]):void{
    this.mainMenu.mutate(val=>{
      val[key] = value;
    });
  }

}
