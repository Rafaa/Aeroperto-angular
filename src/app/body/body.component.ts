import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { GooglePhoto } from '../models/google-photo'

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

/*  photo(oaci) {
    this.searchService.getGooglePhoto(oaci).subscribe((data: GooglePhoto) => {
      console.log(data);
      this.searchService.googlePhoto = data;
    //  this.products = data;
    });
  } */
   googlePhoto = new GooglePhoto();

}
