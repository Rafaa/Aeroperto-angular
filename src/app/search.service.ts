import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Airport } from './models/airport';
import { GooglePhoto } from './models/google-photo';

const endpoint = 'http://localhost:4444/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  bodyTitle: string;
  bodyTitleObservable: Observable<string>;
  public airports : Airport[];
  public googlePhoto : GooglePhoto;


  constructor(private http: HttpClient) {
    this.bodyTitle = "Contenu sponsorisé"
  }


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getBodyTitle(): any {
    this.bodyTitleObservable = new Observable(observer => {

              observer.next(this.bodyTitle);

    });
    return this.bodyTitleObservable;
  }

  searchDome (searchForm): Observable<any> {
    console.log(searchForm);

  //  this.bodyTitleObservable.next("Résultat de recherche");

    return this.http.post<any>(endpoint + 'searchAirports', JSON.stringify(searchForm), httpOptions).pipe(
      tap((searchForm) => console.log(`added product w/ id=${searchForm.oaciCode}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }


  getGooglePhoto (oaci): Observable<any> {
    console.log(oaci);

  //  this.bodyTitleObservable.next("Résultat de recherche");

    return this.http.post<any>(endpoint + 'googlePhoto', oaci, httpOptions).pipe(
      tap((oaci) => console.log(`added product w/ id=${oaci}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
