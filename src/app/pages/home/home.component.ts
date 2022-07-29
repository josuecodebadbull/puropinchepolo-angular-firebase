import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    const video = document.getElementById('myVideo') as HTMLVideoElement | null;
    if (video != null) {
      video.muted = true;
      video?.play();
    }
  }

}
