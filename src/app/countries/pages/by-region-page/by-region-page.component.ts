import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  constructor(private countryService: CountryService) {
  }

  public countries: any[] = [];

  searchByRegion(term: string) {
    this.countryService.searchByRegion(term).subscribe(countries => this.countries = countries)
  }
}
