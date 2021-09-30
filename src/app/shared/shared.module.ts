import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytesFormatPipe } from './pipes/bytes-format.pipe';



@NgModule({
  declarations: [BytesFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [BytesFormatPipe]
})
export class SharedModule { }
