import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';

import { FilebaseComponent } from './pages/filebase/filebase.component';
import { CaptureComponent } from './pages/capture/capture.component';
import { FormsModule } from '@angular/forms';

import {ExporterService} from './services/exporter.service'; // relative path sisdecom\src\app\core\services\exporter.service.ts

@NgModule({
  declarations: [
    AppComponent,
    FilebaseComponent,
    CaptureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule
  ],
  providers: [ExporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
