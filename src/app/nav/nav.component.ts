import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //typescript way
  appTitle: string = 'gv app';
  //javascript way
  //appTitle='my app';


  constructor() { }

  ngOnInit() {
  }

}
