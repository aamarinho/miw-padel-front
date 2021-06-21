import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {ConfirmationDialogComponent} from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule {
}
