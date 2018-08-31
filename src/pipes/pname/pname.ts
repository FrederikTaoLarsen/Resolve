import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PnamePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'pname',
})
export class PnamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
        return items;
    }
    
    return items.filter(item => item.pname?item.pname.indexOf(filter) !== -1: null);
}
}
