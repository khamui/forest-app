import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../common/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [AuthService]
})
export class DashboardComponent {
  as: AuthService;

  constructor(private authService: AuthService) {
    this.as = authService;
  }

  ngOnInit(): void {
  }
}
