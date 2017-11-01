import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  unitID =  12125;
  platform = 'odroid';
  camera = 'Shany IR';
  constructor() { }

  ngOnInit() {
  }

}
