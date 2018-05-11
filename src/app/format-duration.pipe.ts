import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/(PT|S)/g, '').replace(/[HM]/g, ':').split(':').map(item => item.length < 2 ? '0' + item : item).join(':');
  }

}
