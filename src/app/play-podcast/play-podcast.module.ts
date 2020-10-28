import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPodcastPageRoutingModule } from './play-podcast-routing.module';

import { PlayPodcastPage } from './play-podcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayPodcastPageRoutingModule
  ],
  declarations: [PlayPodcastPage]
})
export class PlayPodcastPageModule {}
