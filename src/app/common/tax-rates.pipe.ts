
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform input into readable String (used as hint in UI)
 * Example: Taxes: --> Reduced : 7 (%) --> Standard : 19 (%)
*/
@Pipe({ name: 'taxRates' })
export class TaxRatesPipe implements PipeTransform
{
  transform(values: any[]): {rates: []}
  {
    const concatenated = values?.reduce((prev, curr) =>
    {
      const taxItem = curr.rates.length
        ? TaxRatesPipe.GetString(curr.name, curr.rates)
        : '';
      return prev + taxItem;
    }, 'Taxes: ');
    return concatenated?.toString() ?? '';
  }

  static GetString(key: string, values: string[]): string
  {
    return ` --> ${key} : ${values.toString()
      .replace(',', ' and ')} (%) `
  }
}