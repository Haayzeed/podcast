import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastDetailsPageRoutingModule } from './podcast-details-routing.module';

import { PodcastDetailsPage } from './podcast-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastDetailsPageRoutingModule
  ],
  declarations: [PodcastDetailsPage]
})
export class PodcastDetailsPageModule {}
