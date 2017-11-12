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
  message: any;
  loggedin60 = false;
  showunits60form = false;
  cookie60: string;
  allcnntdunitlist60 = [];
  version60 = false;
  unitversion60 = [];

  loggedin40 = false;
  showunits40form = false;
  cookie40: string;
  allcnntdunitlist40 = [];
  version40 = false;
  unitversion40 = [];

  loggedin50 = false;
  showunits50form = false;
  cookie50: string;
  allcnntdunitlist50 = [];
  version50 = false;
  unitversion50 = [];

  loggedin30 = false;
  showunits30form = false;
  cookie30: string;
  allcnntdunitlist30 = [];
  version30 = false;
  unitversion30 = [];

  loggedin70 = false;
  showunits70form = false;
  cookie70: string;
  allcnntdunitlist70 = [];
  version70 = false;
  unitversion70 = [];
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
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin60 = true;
                this.message = 'Success Login!';
                this.snackBar.open(this.message, 'Got it')
            }else {
                console.log(this.message);
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
  get60unitInfo() {
    this.version60 = true;
    this.showunits60form = false;
    for (let unit of this.allcnntdunitlist60) {
        if (unit.status == 1) {
            const url = 'api/v5/60/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie60,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion60.push({
                        'versioninfo': res.json().apiData,
                    });

                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
    }
  }
  clicklogin30() {
    this.http.post('api/v5login30', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('body', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);
 
            console.log('result:' ,res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin30 = true;
                this.message = 'Success Login!';
               
            }else {
                this.message = bos.apiStatus.responseStatus;
                this.snackBar.open(this.message,'Got it');
            }
            this.cookie30 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }
   clickallconnectunit30() {
    this.http.post('api/v5allconnect30', {
        'cookie': this.cookie30,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist30 = res.json().apiData;
            console.log(this.allcnntdunitlist30);
            this.showunits30form = true;
            this.version30 = false;
            this.unitversion30 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get30unitInfo() {
    this.version30 = true;
    this.showunits30form = false;
    for (let unit of this.allcnntdunitlist30) {
        if (unit.status == 1) {
            const url = 'api/v5/30/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie30,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                console.log(res.json())
                if (bos == 'status_ok') {
                    this.unitversion30.push({
                        'versioninfo': res.json().apiData,
                    });
 
                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
    }
  }
  clicklogin40() {
    this.http.post('api/v5login40', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('body', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);
 
            console.log('result:' ,res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin40 = true;
                this.message = 'Success Login!';
               
            }else {
                this.message = bos.apiStatus.responseStatus;
                this.snackBar.open(this.message,'Got it');
            }
            this.cookie40 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }
   clickallconnectunit40() {
    this.http.post('api/v5allconnect40', {
        'cookie': this.cookie40,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist40 = res.json().apiData;
            console.log(this.allcnntdunitlist40);
            this.showunits40form = true;
            this.version40 = false;
            this.unitversion40 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get40unitInfo() {
    this.version40 = true;
    this.showunits40form = false;
    for (let unit of this.allcnntdunitlist40) {
        if (unit.status == 1) {
            const url = 'api/v5/40/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie40,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion40.push({
                        'versioninfo': res.json().apiData,
                    });
 
                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
    }
  }
  clicklogin50() {
    this.http.post('api/v5login50', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('body', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);
 
            console.log('result:' ,res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin50 = true;
                this.message = 'Success Login!';
               
            }else {
                this.message = bos.apiStatus.responseStatus;
                this.snackBar.open(this.message,'Got it');
            }
            this.cookie50 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }
   clickallconnectunit50() {
    this.http.post('api/v5allconnect50', {
        'cookie': this.cookie50,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist50 = res.json().apiData;
            console.log(this.allcnntdunitlist50);
            this.showunits50form = true;
            this.version50 = false;
            this.unitversion50 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get50unitInfo() {
    this.version50 = true;
    this.showunits50form = false;
    for (let unit of this.allcnntdunitlist50) {
        if (unit.status == 1) {
            const url = 'api/v5/50/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie50,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion50.push({
                        'versioninfo': res.json().apiData,
                    });
 
                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
    }
  }
  clicklogin70() {
    this.http.post('api/v5login70', {
            'username': 'v5root',
            'password': '!v55Rocks!',
        }).map(res => {
            console.log(res.json());
            console.log('body', res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);
 
            console.log('result:' ,res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                this.loggedin70 = true;
                this.message = 'Success Login!';
               
            }else {
                this.message = bos.apiStatus.responseStatus;
                this.snackBar.open(this.message,'Got it');
            }
            this.cookie70 = res.json().cookie[0];
    }).subscribe(data => {
        console.log(data);
    });
  }
   clickallconnectunit70() {
    this.http.post('api/v5allconnect70', {
        'cookie': this.cookie70,
    }).map(res => {
        const bos = res.json().apiStatus.responseStatus;
        if (bos == 'status_ok') {
            this.allcnntdunitlist70 = res.json().apiData;
            console.log(this.allcnntdunitlist70);
            this.showunits70form = true;
            this.version70 = false;
            this.unitversion70 = [];
        }else {
            alert('Need to login first')
        }
        console.log(res.json().apiData);
    }).subscribe();
  }
  get70unitInfo() {
    this.version70 = true;
    this.showunits70form = false;
    for (let unit of this.allcnntdunitlist70) {
        if (unit.status == 1) {
            const url = 'api/v5/70/units/info/' + JSON.stringify(unit.unitId);
            this.http.post(url, {
                'cookie': this.cookie70,
            }).map(res => {
                const bos = res.json().apiStatus.responseStatus;
                if (bos == 'status_ok') {
                    this.unitversion70.push({
                        'versioninfo': res.json().apiData,
                    });
 
                }else {
                    alert('Need to login first');
                }
            }).subscribe(
            );
        }else {
            console.log(unit, 'unit not up! _____________________')
        }
      }
  }
}
