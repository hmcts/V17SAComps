import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {SaComponentsComponent} from "./sa-components/sa-components.component";

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
