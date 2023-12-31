import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWigModule } from 'ngx-wig';
@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule, NgxWigModule],
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent {}
