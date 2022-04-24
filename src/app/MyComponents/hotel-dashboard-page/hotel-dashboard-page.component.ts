import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-dashboard-page',
  templateUrl: './hotel-dashboard-page.component.html',
  styleUrls: ['./hotel-dashboard-page.component.css']
})
export class HotelDashboardPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/index'])
  }

}
