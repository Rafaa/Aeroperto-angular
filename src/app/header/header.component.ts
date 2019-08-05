import { Component, OnInit } from '@angular/core';
import { SearchForm} from '../models/search-form';
import { SearchService } from '../search.service';
import { Airport } from '../models/airport';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public search:SearchService) {
    console.log('changes');

  }
  searchDomes(form) {
    this.search.searchDome(form).subscribe((data: Airport[]) => {
      console.log(data);
      this.search.airports = data;
    //  this.products = data;
    });
  }
   searchForm = new SearchForm();

  ngOnInit() {

  }

}
