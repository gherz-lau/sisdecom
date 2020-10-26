import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { AcuseCobro, AcuseCobroFile } from './../../core/models';
import { GlobalService } from './../../core/services';

@Component({
  selector: 'app-filebase',
  templateUrl: './filebase.component.html',
  styleUrls: ['./filebase.component.scss']
})
export class FilebaseComponent implements OnInit {
  file: AcuseCobroFile = new AcuseCobroFile();
  fileLoaded: boolean;
  constructor(private globalService: GlobalService, private route: Router) { }

  ngOnInit(): void {
  }
  incomingFile($event): void {
    this.file.isLoading = true;
    this.fileLoaded = true;
    let tempFile = $event.target.files[0];
    this.file.name = tempFile.name;
    this.file.fileSize = tempFile.size;
    const target: DataTransfer = $event.target as DataTransfer;
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const str: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(str, { type: 'binary' });

      const ws1: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[ws1];

      this.file.content = XLSX.utils.sheet_to_json<AcuseCobro>(ws);
      this.file.isLoading = false;
      this.file.isSuccess = true;
    }
    reader.readAsBinaryString(target.files[0]);
  }
  accept(): void {
    this.globalService.acuseCobroContent = this.file.content;
    this.route.navigate(['capture']);
  }

}
