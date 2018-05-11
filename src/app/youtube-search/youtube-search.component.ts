import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeSearchService } from '../youtube-search.service';

import { Video } from '../video';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  @Output() notifiy: EventEmitter<Video[]> = new EventEmitter<Video[]>();

  constructor(private youtubeSearch: YoutubeSearchService) { }

  ngOnInit() {
  }

  onClick(term: string) {
    this.youtubeSearch.search(term).subscribe(
      data => this.notifiy.emit(data)
    );
    return false;
  }
}
