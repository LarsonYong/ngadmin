import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationGuardService } from '../services/authentication-guard.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  returnUrl: string;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationGuardService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    AuthenticationGuardService.logout();
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    
   };
   
   public onSubmit(values: Object): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.form.valid) {
      this.submitted = true;
      this.authenticationService.login(this.form.value.username, this.form.value.password )
        .subscribe(
          data => {
            console.log('Success')
            this.router.navigate(['/home']);
          },
          error => {
            console.log("error")
            let config = new MatSnackBarConfig();
            config.extraClasses = ['custom-class']
            this.snackBar.open("User &password combination does not exist",'Got it!',config)
          },
        );
    }
  }

  ngOnInit() {
  }

}
