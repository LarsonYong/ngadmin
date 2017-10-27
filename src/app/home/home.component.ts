import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dashboardwasClicked = false;
  gatewaywasClicked = false;
  buildwasClicked = false;
  unitwasClicked = false;
  
  

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
