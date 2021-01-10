import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/common/settings.service';
import { AuthService } from  '../../common/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [AuthService, SettingsService]
})
export class DashboardComponent {
  as: AuthService;
  ses: SettingsService;

  constructor(private authService: AuthService, private settingsService: SettingsService) {
    this.as = authService;
    this.ses = settingsService;
  }

  ngOnInit(): void {
  }
}
