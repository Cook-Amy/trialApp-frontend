import { ApiServiceService } from './../services/api-service.service';
import { Component, OnInit } from '@angular/core';

declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  stableFeature: string;
  experimentalFeature: string;

  countries: any = [];

  constructor(private server: ApiServiceService) {
    this.server.getCountries().subscribe(data => {
      this.countries = data;
      // console.log("data: ");
      // console.log(this.countries);
    });
   }

  ngOnInit() {
    this.stableFeature = STABLE_FEATURE ? 'Stable feature enabled' : 'Stable feature disabled';
    this.experimentalFeature = EXPERIMENTAL_FEATURE ? 'Experimental feature enabled' : 'Experimental feature disabled';
  }
}

