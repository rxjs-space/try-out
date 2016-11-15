import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutletMap } from '@angular/router';
@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, om: RouterOutletMap) {
    console.log(om);
  }

  ngOnInit() {
  }

}
