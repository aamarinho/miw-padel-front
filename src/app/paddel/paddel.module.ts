import {NgModule} from '@angular/core';
import {PaddelComponent} from "./paddel.component";
import {PaddelRoutingModule} from "./paddel-routing.module";

@NgModule({
  declarations: [
    PaddelComponent
  ],
  entryComponents: [
    //ArticleCreationUpdatingDialogComponent,
  ],
  imports: [
    PaddelRoutingModule,
  ],
  providers: [
    //ArticleService,
  ],
})
export class PaddelModule {
}
