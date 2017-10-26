import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dashboardwasClicked = false;
  gatewaywasClicked = false;
  buildwasClicked = false;
  unitwasClicked = false;
  
  constructor(private router: Router) { }

  gotohome() {
    this.router.navigateByUrl('/home')
    this.gatewaywasClicked = false
    this.buildwasClicked = false
    this.unitwasClicked = false
    this.dashboardwasClicked  =false
  }
  dashboardCLicked() {
    this.dashboardwasClicked = true
    this.gatewaywasClicked = false
    this.buildwasClicked = false
    this.unitwasClicked = false
  }
  gatewayCLicked() {
    this.gatewaywasClicked = true
    this.buildwasClicked = false
    this.unitwasClicked = false
    this.dashboardwasClicked  =false
  }
  buildCLicked() {
    this.buildwasClicked = true
    this.gatewaywasClicked = false
    this.unitwasClicked = false
    this.dashboardwasClicked  =false
  }
  unitCLicked() {
    this.unitwasClicked = true
    this.gatewaywasClicked = false
    this.buildwasClicked = false
    this.dashboardwasClicked  =false
  }
  userCLicked() {
    this.gatewaywasClicked = false
    this.buildwasClicked = false
    this.unitwasClicked = false
    this.dashboardwasClicked  =false
  }
}


