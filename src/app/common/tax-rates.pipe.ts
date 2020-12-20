
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
*/
@Pipe({name: 'taxRates'})
export class TaxRatesPipe implements PipeTransform {
  transform(values: any[]): string {
    const concatenated = values?.reduce((prev, curr) => {
      const taxItem = curr.rates.length ? ` --> ${curr.name}(%): ${curr.rates.toString()} ` : '';
      return prev + taxItem;
    }, 'Taxes: ');
    return concatenated?.toString() || '';
  }
}