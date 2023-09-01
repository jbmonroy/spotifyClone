import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    GenericSectionComponent
  ]
})
export class TracksModule { }
