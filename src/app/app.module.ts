import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SaComponentsComponent} from "@hmcts/sa-components";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

const routes = [
  {path:'', component:SaComponentsComponent}
]
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        SaComponentsComponent,
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  providers: [Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
