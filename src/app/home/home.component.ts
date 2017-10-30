import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router'
import { logout, isloggedin} from '../services/authentication-guard.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUrl: String;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    if (this.activatedRoute.snapshot.children[0] == undefined) {
      this.router.navigateByUrl('/home')
    }
    else{
      this.currentUrl = this.activatedRoute.snapshot.children[0].url[0].path;
      if (this.currentUrl == 'build') {
        this.buildCLicked();
      }
      if (this.currentUrl == 'gateway') {
        this.gatewayCLicked();
      }
      if (this.currentUrl == 'unit') {
        this.unitCLicked();
      }
      if (this.currentUrl == 'dashboard') {
        this.dashboardCLicked();
      }
   }
  }

  ngOnInit() {
   
  }

  dashboardwasClicked = false;
  gatewaywasClicked = false;
  buildwasClicked = false;
  unitwasClicked = false;

  logoutCLicked() {
    const checkResult = isloggedin();
    if (checkResult) {
        logout();
        this.router.navigateByUrl('/login') ;
    }

  }

  gotohome() {
    this.router.navigateByUrl('/home');
    this.gatewaywasClicked = false;
    this.buildwasClicked = false;
    this.unitwasClicked = false;
    this.dashboardwasClicked  = false;
  }
  dashboardCLicked() {
    this.dashboardwasClicked = true;
    this.gatewaywasClicked = false;
    this.buildwasClicked = false;
    this.unitwasClicked = false;
  }
  gatewayCLicked() {
    this.gatewaywasClicked = true;
    this.buildwasClicked = false;
    this.unitwasClicked = false;
    this.dashboardwasClicked  = false;
  }
  buildCLicked() {
    this.buildwasClicked = true;
    this.gatewaywasClicked = false;
    this.unitwasClicked = false;
    this.dashboardwasClicked  = false;
  }
  unitCLicked() {
    this.unitwasClicked = true;
    this.gatewaywasClicked = false;
    this.buildwasClicked = false;
    this.dashboardwasClicked  = false;
  }
  userCLicked() {
    this.gatewaywasClicked = false;
    this.buildwasClicked = false;
    this.unitwasClicked = false;
    this.dashboardwasClicked  = false;
  }
}
