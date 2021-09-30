import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesFormat'
})
export class BytesFormatPipe implements PipeTransform {

  transform(bytes: number): any {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (!bytes || bytes === 0) {
      return 'n/a';
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);

    if (i === 0) {
      return `${bytes} ${sizes[i]})`;
    }

    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
  }
}
