import { TAX_RATES } from './tax.constants';

export class TaxService {

  constructor() {
  }

  getTaxOptions() {
    return TAX_RATES;
  }
}
