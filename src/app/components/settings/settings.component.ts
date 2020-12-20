import { Component, OnInit } from '@angular/core';
import { TaxService } from 'src/app/common/tax.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  providers: [TaxService]
})
export class SettingsComponent implements OnInit {
  ts: TaxService;
  taxCountries: any[];
  selectedCountry: any[];


  constructor(taxService: TaxService) {
    this.ts = taxService;
    this.taxCountries = [];
    this.selectedCountry = [];
  }

  ngOnInit(): void {
    this.taxCountries = this.ts.getTaxOptions();
  }

}
