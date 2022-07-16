import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-polopanels',
  templateUrl: './polopanels.component.html',
  styleUrls: ['./polopanels.component.scss']
})
export class PolopanelsComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
