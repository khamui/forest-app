import { Component, OnInit } from '@angular/core';
import { TaxService } from 'src/app/common/tax.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  providers: [TaxService]
})
export class SettingsComponent implements OnInit {
  ts: TaxService;
  ses: SettingsService;
  taxCountries: any[] = [];
  selectedCountry: any[] = [];
  selectedTaxPayment = '';
  selectedPeriod = '';
  periods: any[];
  intervals: any[];

  groupControl: FormGroup;

  get currentCountry(): any[] {
    return this.groupControl && this.groupControl.get('taxsystemControl')?.value;
  }

  constructor(taxService: TaxService, settingsService: SettingsService) {
    this.ts = taxService;
    this.ses = settingsService;
    this.periods = [1, 2, 3];
    this.intervals = ['monthly', 'monthly (+1 offset)', 'quarterly', 'yearly'];

    this.groupControl = new FormGroup({
      projectnameControl: new FormControl('', [Validators.required]),
      startdateControl: new FormControl('', [Validators.required]),
      periodControl: new FormControl('', [Validators.required]),
      taxsystemControl: new FormControl('', [Validators.required]),
      taxpayControl: new FormControl('', [Validators.required])
    });

    this.groupControl.statusChanges
      .subscribe(result => this.ses.paramsCompleted = result === 'VALID');
  }

  ngOnInit(): void {
    this.taxCountries = this.ts.getTaxOptions();
  }

}
