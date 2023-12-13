import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddressFormComponent,
  GovukFrameComponent,
} from '@hmcts/sa-components';

@Component({
  selector: 'app-test-page4',
  standalone: true,

  imports: [CommonModule, GovukFrameComponent, AddressFormComponent],
  templateUrl: './test-page4.component.html',
  styleUrl: './test-page4.component.scss',
})
export class TestPage4Component {
  @ViewChild('anchorRef') anchorRef!: ElementRef;
  public topLeft = { x: 0, y: 0 };
  public size = { w: 200, h: 200 };
  private domRect?: DOMRect;
}
