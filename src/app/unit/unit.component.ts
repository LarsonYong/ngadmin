import { Component, OnInit, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SortGridPipe } from '../services/filter-array-pipe'
import { Ng2OrderModule } from 'ng2-order-pipe';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: [
    './unit.component.css',
    '../../assets/css/table.scss'
],
  
})
@Pipe({ name: 'FilterArrayPipe'})
export class UnitComponent implements OnInit {
  display_unitID =  '';
  display_platform = 'Odroid';
  display_camera = 'Shany IR';
  Unit_list = ['1024','1071', '12125', '12156','12251','12329', '12330', '12334', '13304', '31116',];
  UnitDetail= [{
    'UnitId': '',
    'Platform': '',
    'Camera': '',
  }];
  message ='';
  BuildHistory= [{
    '': '',
  }];
  getHistory = false;
  selectedUnit = String;
  constructor(
    private http: Http,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  select_unit(unitID) {
    console.log("Selected unit: ", unitID);
    const reqSting = 'api/getUnit/' + unitID;
    this.http.get(reqSting)
    .map(res => {
      this.UnitDetail = res.json()[0]; 
      console.log(this.UnitDetail);
      
      this.BuildHistory = res.json()[0].BuildHistory;
      console.log(this.BuildHistory);
      this.getHistory = true;
      this.selectedUnit = unitID;
    }).subscribe();

  }

  add_updateTime(unitId, build, time) {
    if (!this.getHistory){
      return this.snackbar.open('Need to select unit first !')
    }
    const po = {
      'UnitId': unitId,
      'Build': build,
      'Time': time,
    };
    this.http.post('api/UpdateHistory', po).map(res => {
      this.BuildHistory = [];
      this.message = res.json().message;
      console.log(res.json().message);
      alert(res.json().message);
    }).subscribe();

    const reqSting = 'api/getUnit/' + this.selectedUnit;
    this.http.get(reqSting).map(res => {
      this.UnitDetail = res.json()[0]; 
      console.log(this.UnitDetail);
      this.BuildHistory = res.json()[0].BuildHistory;
      console.log(this.BuildHistory);
      this.getHistory = true;
    }).subscribe();
  }
}
