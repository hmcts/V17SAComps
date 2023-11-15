import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxWigModule} from "ngx-wig";

@Component({
  selector: 'govuk-text-editor',
  standalone: true,
  imports: [CommonModule, NgxWigModule],
  templateUrl: './govuk-text-editor.component.html',
  styleUrls: ['./govuk-text-editor.component.scss'],
})
export class GovukTextEditorComponent {}
