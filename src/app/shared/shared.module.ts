import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {ConfirmationDialogComponent} from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule {
}
