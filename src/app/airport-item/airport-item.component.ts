import { Component, OnInit, Input } from '@angular/core';
import { Airport } from '../models/airport';

@Component({
  selector: 'app-airport-item',
  templateUrl: './airport-item.component.html',
  styleUrls: ['./airport-item.component.css']
})
export class AirportItemComponent implements OnInit {
  @Input() public airportItem : Airport;

  constructor() { }

  ngOnInit() {
  }

}
