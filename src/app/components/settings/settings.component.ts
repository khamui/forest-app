import { Component, OnInit } from '@angular/core';
import { TaxService } from 'src/app/common/tax.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/common/settings.service';
import { take } from 'rxjs/operators';

@Component
({
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.sass'],
  providers: [TaxService, SettingsService]
})

export class SettingsComponent implements OnInit
{
  groupControl: FormGroup;
  projectId: TPid = '';
  nameControl: FormControl;
  startdateControl: FormControl;
  periodControl: FormControl;
  taxsystemControl: FormControl;
  taxpayControl: FormControl;

  taxCountries: ITaxCountries[] = [];
  periods: number[];
  intervals: string[];

  changed = false;

  get currentTaxSystem(): ITaxCountries | undefined
  {
    if(!this.taxsystemControl) return;
    const currentTaxCountry = this.taxsystemControl.value;
    return this.taxCountries.find(tc => tc.name === currentTaxCountry);
  }

  get disabled(): boolean
  {
    return !this.ses.paramsCompleted || !this.changed;
  }

  constructor
  (
    private ts: TaxService,
    public ses: SettingsService
  )
  {
    // TODO: organize somewhere else!
    this.periods = [1, 2, 3];
    this.intervals =
    [
      'monthly',
      'monthly (+1 offset)',
      'quarterly',
      'yearly'
    ];

    this.nameControl = new FormControl('', [Validators.required]);
    this.startdateControl = new FormControl('', [Validators.required]);
    this.periodControl = new FormControl('', [Validators.required]);
    this.taxsystemControl = new FormControl('', [Validators.required]);
    this.taxpayControl = new FormControl('', [Validators.required]);

    this.groupControl = new FormGroup
    ({
      nameControl: this.nameControl,
      startdateControl: this.startdateControl,
      periodControl: this.periodControl,
      taxsystemControl: this.taxsystemControl,
      taxpayControl: this.taxpayControl
    });
  }

  ngOnInit(): void
  {
    this.groupControl.statusChanges
      .subscribe(result => this.ses.paramsCompleted = result === 'VALID');
    this.ses.load()
      .subscribe(({ payload }) => this.initForm(payload.data()));
    this.taxCountries = this.ts.getTaxOptions();
  }

  initForm(project: IProject): void
  {
    this.projectId = project.id;
    this.nameControl.setValue(project.name);
    this.startdateControl.setValue(project.settings.startDate.toDate());
    this.periodControl.setValue(project.settings.period);
    this.taxsystemControl.setValue(project.settings.taxSystem);
    this.taxpayControl.setValue(project.settings.taxInterval);

    this.groupControl.valueChanges
      .pipe(take(1))
      .subscribe(() => this.changed = !this.changed);
  }

  saveSettings():void
  {
    const meta: IProjectMeta =
    {
      id: this.projectId,
      name: this.nameControl.value,
      settings:
      {
        startDate: this.startdateControl.value,
        period: this.periodControl.value,
        taxSystem: this.taxsystemControl.value,
        taxInterval: this.taxpayControl.value
      }
    }
    this.changed = false;
    !!meta.id && this.ses.save(meta);
  }
}
