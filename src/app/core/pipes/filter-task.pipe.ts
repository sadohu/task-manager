import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

  transform(items: any[], searchText: string, propertyName?: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (propertyName) {
        // Filter based on a specific property of the object
        return item[propertyName].toLowerCase().includes(searchText);
      } else {
        // Filter based on the item itself (if it's a primitive type like string)
        return item.toLowerCase().includes(searchText);
      }
    });
  }

}
