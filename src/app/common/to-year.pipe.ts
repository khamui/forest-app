
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
*/
@Pipe({name: 'toYear'})
export class ToYearPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) return `${value} year`;
    return `${value} years`;
  }
}