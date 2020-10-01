import { Component, OnInit, Input } from '@angular/core';
import { Airport } from '../models/airport';
import { SearchService } from '../search.service';
import { GooglePhoto } from "../models/google-photo";
import { DomSanitizer, SafeResourceUrl, SafeStyle} from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-airport-item',
  templateUrl: './airport-item.component.html',
  styleUrls: ['./airport-item.component.css']
})
export class AirportItemComponent implements OnInit {
  @Input() public airportItem : Airport;
  public googlePhoto : GooglePhoto ;
  public url : string;
  public sanitaziedUrl;

  constructor(public search:SearchService, private sanitizer: DomSanitizer) {
    console.log('changes');


  }


/*  photo(oaci) {
    this.search.getGooglePhoto(oaci).subscribe((data: GooglePhoto) => {
      //console.log(data);

      this.googlePhoto = new GooglePhoto();
      this.googlePhoto.photo = data.photo
      this.url = 'data:image/jpeg;base64,' + data.photo;
      this.sanitaziedUrl = this.sanitizeStyle('data:image/jpeg;base64,' + data.photo);
      console.log("Sanitized URL");
      console.log(this.sanitaziedUrl);
      console.log("Unsafe URL");
      console.log(this.url);




    });
  }*/

  sanitizeStyle(unsafeStyle: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);
  }

  ngOnInit() {
//    this.photo(this.airportItem.codeOaci);


  }

  ngAfterViewInit() {
    $(".background-image").each(function() {
        $(this).css("background-image", "url("+ $(this).find("img").attr("src") +")" );
    });
  }

}
