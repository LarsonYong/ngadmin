import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { logout, AuthenticationGuardService } from '../app/services/authentication-guard.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/table.scss'
]
})
export class AppComponent {
  title = 'app';
  dashboardwasClicked = false;
  gatewaywasClicked = false;
  buildwasClicked = false;
  unitwasClicked = false;
  
  constructor(
    private router: Router,
    private authent: AuthenticationGuardService
  ) {
   
   }
  
}


