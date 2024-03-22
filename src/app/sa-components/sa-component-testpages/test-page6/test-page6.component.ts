import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollutedEditComponent } from '../../facade-example/polluted-component/polluted-edit.component';
import { CleanEditComponent } from '../../facade-example/clean-component/clean-edit.component';

@Component({
  selector: 'app-test-page6',
  standalone: true,
  imports: [CommonModule, PollutedEditComponent, CleanEditComponent],
  templateUrl: './test-page6.component.html',
  styleUrl: './test-page6.component.css',
})
export class TestPage6Component {}
