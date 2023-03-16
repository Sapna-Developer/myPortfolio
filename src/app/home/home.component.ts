import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          // height: '200px',
          opacity: 1,
          backgroundColor: '#f9b205',
        })
      ),
      state(
        'closed',
        style({
          // height: '100px',
          opacity: 0.8,
          backgroundColor: 'pink',
        })
      ),
      transition('open=>closed', [animate('1s')]),
      transition('closed=>open', [animate('0.8s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}
}
