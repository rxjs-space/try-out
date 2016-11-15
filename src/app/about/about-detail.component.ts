import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutletMap } from '@angular/router';
@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutDetailComponent implements OnInit {
  go: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }

}
