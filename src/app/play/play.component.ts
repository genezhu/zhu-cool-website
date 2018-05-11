import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../video';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  videoId: string;

  constructor(private activatedRoute : ActivatedRoute, private router: Router) {
    this.videoId = activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

  onNotify(): void {
    this.router.navigate(['']);
  }  
}
