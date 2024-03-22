import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaBaseComponent } from './sa-components/sa-base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, SaBaseComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sa-comps-test';
}
