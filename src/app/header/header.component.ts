import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: CustomEvent;
  constructor() { }

  ngOnInit() {
    this.getDashboardData();
  }

  getDashboardData() {
    window.addEventListener('data-header', (evt: CustomEvent) => {
      this.data = evt;
      console.log('Header', this.data)
    })
  }

}
