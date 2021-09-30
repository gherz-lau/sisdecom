import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './pages/capture/capture.component';
import { FilebaseComponent } from './pages/filebase/filebase.component';

const routes: Routes = [
  { path: '', component: FilebaseComponent },
  { path: 'capture', component: CaptureComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
