import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayPodcastPage } from './play-podcast.page';

describe('PlayPodcastPage', () => {
  let component: PlayPodcastPage;
  let fixture: ComponentFixture<PlayPodcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPodcastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayPodcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
