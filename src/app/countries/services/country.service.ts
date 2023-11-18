import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map, Observable, of} from "rxjs";
import {Country} from "../interfaces/Country";

@Injectable({providedIn: 'root'})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {
  }

  private countriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(_err => of([])),
      delay(2000)
    )
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.countriesRequest(url)
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.countriesRequest(url)
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.countriesRequest(url)
  }

  searchByCode(term: string): Observable<null | Country> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.countriesRequest(url).pipe(
      map(([country]) => country),
      catchError(_err => of(null))
    )
  }
}
