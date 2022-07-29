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
        let video = (<HTMLInputElement>document.getElementById('video'));
        console.log(video);
        video.play();
  }

}
