import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutletMap } from '@angular/router';

@Component({
  selector: 'app-universal-root',
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.css']
})
export class UniversalComponent {
  title = 'universal works!';
  constructor() {
  }
  
}
