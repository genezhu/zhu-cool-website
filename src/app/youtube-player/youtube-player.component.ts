import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnChanges {

  @Input() videoId: string;

  autoplay = 1;

  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.videoId) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.videoId + "?showinfo=0&rel=0&autoplay=1");
    }
  }

}
