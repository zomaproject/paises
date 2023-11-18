import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  constructor(private countryService: CountryService) {
  }

  public countries: Country[] = [];

  searchByCapital(term: string) {
    this.countryService.searchByCountry(term).subscribe(countries => this.countries = countries)
  }
}
