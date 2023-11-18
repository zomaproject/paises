import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  constructor(private countryService: CountryService) {
  }

  public countries: Country[] = []
  public isLoaded: boolean = false;

  searchByCapital(term: string) {
    this.isLoaded = true;
    this.countryService.searchByCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoaded = false
    })
  }
}
