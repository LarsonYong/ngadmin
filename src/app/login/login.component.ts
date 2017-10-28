import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationGuardService } from '../services/authentication-guard.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

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
    console.log(this.username)
    console.log(this.username)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.form.valid) {
      this.submitted = true;
      this.authenticationService.login(this.form.value.username, this.form.value.password )
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            
          },
        );
    }
  }

  ngOnInit() {
  }

}
