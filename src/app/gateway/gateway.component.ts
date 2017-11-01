import { Component, OnInit } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: [
    './gateway.component.css',
    '../../assets/css/table.scss'
]
})
export class GatewayComponent implements OnInit {

  loggedin60 = false;
  showunits60form = false;
  message: any;
  cookie60: string;
  allcnntdunitlist60 = [];
  version60 = false;
  unitversion60 = [];
  constructor(
    private http: Http,
    public snackBar: MatSnackBar
  ) {
    
   }

  ngOnInit() {
  }

  clicklogin60() {
    this.http.post('api/v5login60', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('body', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);

            console.log('result:' ,res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin60 = true;
                this.message = 'Success Login!';
                
            }else {
                this.message = bos.apiStatus.responseStatus;
                this.snackBar.open(this.message,'Got it');
            }
            this.cookie60 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }
  
  clickallconnectunit60() {
    this.http.post('api/v5allconnect60', {
        'cookie': this.cookie60,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist60 = res.json().apiData;
            console.log(this.allcnntdunitlist60);
            this.showunits60form = true;
            this.version60 = false;
            this.unitversion60 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
}
