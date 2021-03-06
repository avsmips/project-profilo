import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [MDBBootstrapModule],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: []
})
export class MdBootstrapModule { }
