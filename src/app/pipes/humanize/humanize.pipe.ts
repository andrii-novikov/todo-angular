import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(value: string): string {
    value = this._fromSnakeCase(value);
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  private _fromSnakeCase(value: string): string {
    return value.replace('_', ' ')
  }

}
