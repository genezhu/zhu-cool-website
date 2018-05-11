import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  onClick(videoId: string) {
    console.log(videoId);
    return false;
  }
}
