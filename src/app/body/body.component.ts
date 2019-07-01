import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bodyTitle: string;


  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    const bodyTitleObservable = this.searchService.getBodyTitle();
    bodyTitleObservable.subscribe((newValue: string) => {
      this.bodyTitle = newValue;
    });
  }

}
