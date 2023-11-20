import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovukTextareaComponent } from '../../../../../libs/src/lib/components/govuk-textarea/govuk-textarea.component';
import { TextEditorComponent } from '../../../components/text-editor.component';

@Component({
  selector: 'lib-test-page3',
  standalone: true,
  imports: [CommonModule, GovukTextareaComponent, TextEditorComponent],
  templateUrl: './test-page3.component.html',
  styleUrls: ['./test-page3.component.scss'],
})
export class TestPage3Component {}
