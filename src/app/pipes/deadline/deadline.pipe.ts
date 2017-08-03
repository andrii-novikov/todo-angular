import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'deadline', pure: false })
export class DeadlinePipe implements PipeTransform {

  transform(date: string): string {
    return date ? date : '-'
  }

}
