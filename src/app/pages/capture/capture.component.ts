import { Component, OnInit } from '@angular/core';
import { AcuseCobro } from 'src/app/core/models';
import { GlobalService } from 'src/app/core/services';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  content: Array<AcuseCobro> = new Array<AcuseCobro>();
  constructor(private globalService: GlobalService) {
    this.content = globalService.acuseCobroContent;
  }

  ngOnInit(): void {
  }

}
