import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';
// import { fadeIn } from '../animations.';

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css'],
  animations: [fadeIn],
})
export class ReachComponent implements OnInit {
  list: any = [];
  constructor() {}

  ngOnInit(): void {}
  items = [
    {
      name: 'Nishant',
      age: 25,
    },
    {
      name: 'Shailesh',
      age: 45,
    },
    {
      name: 'Abhishek',
      age: 36,
    },
    {
      name: 'Akshay',
      age: 65,
    },
    {
      name: 'Ashish',
      age: 12,
    },
    {
      name: 'Uday',
      age: 31,
    },
    {
      name: 'Mayank',
      age: 45,
    },
    {
      name: 'Raju',
      age: 74,
    },
  ];
  addItem(data: any) {
    console.log(data.target.value);
    this.list.push(data.target.value);
    this.list.forEach((ele: any) => {
      console.log(ele);
    });
  }
  deleteItem(del: any) {
    console.log(del);
  }
}
