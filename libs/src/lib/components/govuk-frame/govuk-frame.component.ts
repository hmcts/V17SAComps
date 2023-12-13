import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AspectRatioIcon } from '../../icons/aspect-ratio.icon';

export type ResizeAnchorType = 'top' | 'left' | 'bottom' | 'right';

export type ResizeDirectionType = 'x' | 'y' | 'xy';
//TODO whilst this currently works without Javascript via CSS resize it would be more useful
// if the drag could be constrained within the parent container
// there is also a padding overflow issue here

@Component({
  selector: 'govuk-frame',
  standalone: true,
  imports: [CommonModule, AspectRatioIcon],
  templateUrl: './govuk-frame.component.html',
  styleUrl: './govuk-frame.component.scss',
})
export class GovukFrameComponent implements AfterContentInit {
  @Input() draggable?: boolean = false;
  @Input() resizable?: boolean = false;
  @Input() topAnchor?: { x: number; y: number };
  @Input() initialSize?: { w: number; h: number };

  @ViewChild('resizeCorner') resizeCornerRef!: ElementRef;

  @ViewChild('wrapper') wrapperRef!: ElementRef;

  @ViewChild('topBar') topBarRef!: ElementRef;

  position: { x: number; y: number } = { x: 0, y: 0 };

  size: { w: number; h: number } = { w: 200, h: 200 };

  lastPosition: { x: number; y: number } = { x: 0, y: 0 };

  lastSize: { w: number; h: number } = { w: 200, h: 200 };

  minSize: { w: number; h: number } = { w: 200, h: 200 };

  constructor(
    @Inject(DOCUMENT)
    private _document: Document,
    private _el: ElementRef,
  ) {}

  ngAfterContentInit(): void {
    if (this.topAnchor && this.initialSize) {
      console.log('setting initial size');
      this.position = this.topAnchor;
      this.size = this.initialSize;
    }
  }

  startDrag($event: {
    preventDefault: () => void;
    clientX: any;
    clientY: any;
  }): void {
    console.log('startdrag');
    $event.preventDefault();
    const mouseX = $event.clientX;
    const mouseY = $event.clientY;

    const positionX = this.position.x;
    const positionY = this.position.y;

    const duringDrag = (e: { clientX: number; clientY: number }) => {
      const dx = e.clientX - mouseX;
      const dy = e.clientY - mouseY;
      this.position.x = positionX + dx;
      this.position.y = positionY + dy;
      this.lastPosition = { ...this.position };
    };

    const finishDrag = () => {
      this._document.removeEventListener('mousemove', duringDrag);
      this._document.removeEventListener('mouseup', finishDrag);
    };

    this._document.addEventListener('mousemove', duringDrag);
    this._document.addEventListener('mouseup', finishDrag);
  }

  startResize(
    $event: { preventDefault: () => void; clientX: any; clientY: any },
    anchors: ResizeAnchorType[],
    direction: ResizeDirectionType,
  ): void {
    $event.preventDefault();
    console.log('startResize');
    const mouseX = $event.clientX;
    const mouseY = $event.clientY;
    const lastX = this.position.x;
    const lastY = this.position.y;
    const dimensionWidth =
      this.resizeCornerRef.nativeElement.parentNode.offsetWidth;
    const dimensionHeight =
      this.resizeCornerRef.nativeElement.parentNode.offsetHeight;

    const duringResize = (e: { clientX: number; clientY: number }) => {
      let dw = dimensionWidth;
      let dh = dimensionHeight;
      if (direction === 'x' || direction === 'xy') {
        if (anchors.includes('left')) {
          dw += mouseX - e.clientX;
        } else if (anchors.includes('right')) {
          dw -= mouseX - e.clientX;
        }
      }
      if (direction === 'y' || direction === 'xy') {
        if (anchors.includes('top')) {
          dh += mouseY - e.clientY;
        } else if (anchors.includes('bottom')) {
          dh -= mouseY - e.clientY;
        }
      }

      if (anchors.includes('left')) {
        this.position.x = lastX + e.clientX - mouseX;
        this.size.w = Math.max(dw, this.minSize.w);
      }

      if (anchors.includes('top')) {
        this.position.y = lastY + e.clientY - mouseY;
        this.size.h = Math.max(dh, this.minSize.h);
      }

      if (anchors.includes('bottom') || anchors.includes('right')) {
        this.size.w = Math.max(dw, this.minSize.w);
        this.size.h = Math.max(dh, this.minSize.h);
      }

      this.lastSize = { ...this.size };
    };

    const finishResize = () => {
      this._document.removeEventListener('mousemove', duringResize);
      this._document.removeEventListener('mouseup', finishResize);
    };

    this._document.addEventListener('mousemove', duringResize);
    this._document.addEventListener('mouseup', finishResize);
  }
}
