import { TAX_RATES } from './tax.constants';

export class TaxService
{
  getTaxOptions(): TTaxCountries
  {
    return TAX_RATES;
  }
}
