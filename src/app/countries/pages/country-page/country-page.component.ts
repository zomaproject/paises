import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountryService} from "../../services/country.service";
import {switchMap} from "rxjs";
import {Country} from "../../interfaces/Country";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.countryService.searchByCode(id))
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        console.log(country)
        this.country = country;
        return
      })


  }


}
