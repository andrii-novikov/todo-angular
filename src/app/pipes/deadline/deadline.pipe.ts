import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deadline'
})
export class DeadlinePipe implements PipeTransform {

  transform(date: string): string {
    return date ? date : 'none'
  }

}
