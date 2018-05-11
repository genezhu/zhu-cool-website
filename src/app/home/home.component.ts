import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { YoutubeSearchService } from '../youtube-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoList : Video[];
  constructor(private youtubeSearch: YoutubeSearchService) { }

  ngOnInit() {
    this.videoList = this.youtubeSearch.getvideoList();
  }

  onNotify(message: Video[]): void {
    this.videoList = message;
  }  
}
