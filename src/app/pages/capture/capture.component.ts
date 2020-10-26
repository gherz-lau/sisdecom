import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcuseCobro, Pagination } from 'src/app/core/models';
import {
  GlobalService,
  PaginationService,
  ExporterService,
} from 'src/app/core/services';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent implements OnInit {
  //total de acuses
  content: Array<AcuseCobro> = new Array<AcuseCobro>();

  //acuses acpturados
  aCapturados: Array<AcuseCobro> = new Array<AcuseCobro>();

  acuseSearch: string;

  pagination: Pagination<AcuseCobro> = new Pagination<AcuseCobro>();
  active = 1;

  constructor(
    private globalService: GlobalService,
    private paginationService: PaginationService,
    private excelService: ExporterService,
    private router: Router
  ) {
    this.content = globalService.acuseCobroContent;
    this.setPage();
  }
  ngOnInit(): void {
    if (!this.content || this.content.length == 0) this.router.navigate(['/']);
  }

  search($event) {
    if ($event.keyCode === 13) {
      let index = this.content.findIndex((f) => {
        return f.folioFormato.toString() === this.acuseSearch;
      });

      let element = this.content[index];
      this.aCapturados.push(element);
      this.content = this.content.filter(
        (f) => f.folioFormato.toString() !== this.acuseSearch
      );
      this.setPage();
      this.acuseSearch = '';
    }
  }

  //info de paginacion
  setPage() {
    this.pagination.pager = this.paginationService.getPager(
      this.content.length,
      this.pagination.page,
      this.pagination.pageSize
    );
    this.pagination.pagedItems = this.content.slice(
      this.pagination.pager.startIndex,
      this.pagination.pager.endIndex + 1
    );
  }
  newPage($event) {
    this.pagination.page = $event;
    this.setPage();
  }

  exportAsXLSX(collection): void {
    this.excelService.exportToExcel(collection, 'my_export');
  }
}
