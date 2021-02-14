import { TAX_RATES } from './tax.constants';

export class TaxService
{
  getTaxOptions(): ITaxCountries[]
  {
    return TAX_RATES;
  }
}
