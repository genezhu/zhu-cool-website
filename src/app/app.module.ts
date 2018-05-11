import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { YoutubeSearchService } from './youtube-search.service';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { FormatDurationPipe } from './format-duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    VideoListComponent,
    YoutubeSearchComponent,
    HomeComponent,
    PlayComponent,
    FormatDurationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'play/:id', component: PlayComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [YoutubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
