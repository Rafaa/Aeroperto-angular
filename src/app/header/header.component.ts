import { Component, OnInit } from '@angular/core';
import { SearchForm} from '../models/search-form.ts'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes);
  }
console.log('changes');
  searchForm = new SearchForm();
  searchForm.oaciCode = 'LFPH';

  greeting = false;
}
