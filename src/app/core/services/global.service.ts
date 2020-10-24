import { Injectable } from '@angular/core';
import { AcuseCobro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  acuseCobroContent: Array<AcuseCobro> = new Array<AcuseCobro>();

  constructor() { }
}
