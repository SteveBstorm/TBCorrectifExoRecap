import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';



@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormErrorComponent
  ]
})
export class SharedModule { }
