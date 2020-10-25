import { Component, OnInit } from '@angular/core';
import { AcuseCobro, Pagination } from 'src/app/core/models';
import { GlobalService, PaginationService } from 'src/app/core/services';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {
  //total de acuses
  content: Array<AcuseCobro> = new Array<AcuseCobro>();
  //acuses acpturados
  aCapturados: Array<AcuseCobro> = new Array<AcuseCobro>();

  acuseSearch: string;

  pagination: Pagination<AcuseCobro> = new Pagination<AcuseCobro>();
  active = 1;
  constructor(private globalService: GlobalService, private paginationService: PaginationService) {
    this.content = globalService.acuseCobroContent;
    this.setPage();
  }
  ngOnInit(): void {
  }

  search($event) {
    if ($event.keyCode === 13) {
      let index = this.content.findIndex(f => {
        return f.idPrograma.toString() === this.acuseSearch;
      });

      let element = this.content[index];
      this.aCapturados.push(element);
      this.content = this.content.filter(f => f.idPrograma.toString() !== this.acuseSearch);
      this.acuseSearch = '';
    }
  }

  //info de paginacion
  setPage() {
    this.pagination.pager = this.paginationService.getPager(this.content.length, this.pagination.page, this.pagination.pageSize);
    this.pagination.pagedItems = this.content.slice(this.pagination.pager.startIndex, this.pagination.pager.endIndex + 1);
  }
  newPage($event) {
    this.pagination.page = $event;
    this.setPage();
  }
}
