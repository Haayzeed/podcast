import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayPodcastPage } from './play-podcast.page';

const routes: Routes = [
  {
    path: '',
    component: PlayPodcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayPodcastPageRoutingModule {}
