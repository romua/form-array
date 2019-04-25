import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public layoutGap = '20px';

  constructor() {
  }

  ngOnInit() {
  }

  changeLayoutGap(gap: string): void {
    this.layoutGap = !!gap ? gap : '20px';
  }
}
