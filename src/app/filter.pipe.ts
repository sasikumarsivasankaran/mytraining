import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
    transform(collection: any[], field: any, value: any): any[] {
      // return collection.filter(item => item[field].includes(value));
      if(!isNaN(parseFloat(value))) {
        console.log('Number');
        return collection.filter(item => item[field].includes(value));
      } else {
        console.log('string');
        return collection.filter(item => item[field].toUpperCase().includes(value.toUpperCase()));
      }
   //   return collection.filter(item => item[field].toUpperCase().includes(value.toUpperCase()));
    // return null;
  }

}
