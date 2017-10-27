import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CanActivate } from "@angular/router"

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuildComponent } from './build/build.component';
import { UnitComponent } from './unit/unit.component';
import { GatewayComponent } from './gateway/gateway.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuardService} from '../app/services/authentication-guard.service'
import { AuthenticationGuard } from '../app/services/authGuard.service'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BuildComponent,
    UnitComponent,
    GatewayComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent,
      },
      {
        path: '', component: HomeComponent, canActivate:[AuthenticationGuard]
      },
      {
        path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard]
      },
      {
        path: 'gateeway', component: GatewayComponent, canActivate:[AuthenticationGuard]
      },
      {
        path: 'build', component: BuildComponent, canActivate:[AuthenticationGuard]
      },
      {
        path: 'unit', component: UnitComponent , canActivate:[AuthenticationGuard] 
      },
      {
        path: 'user', component: UserComponent, canActivate:[AuthenticationGuard]
      },
      {
        path: '**', redirectTo: '', pathMatch:'full', canActivate:[AuthenticationGuard]
      },
    ])],
  providers: [
    AuthenticationGuardService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
