import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GovukFrameComponent} from "@hmcts/sa-components";


@Component({
  selector: 'app-test-page4',
  standalone: true,



  imports: [CommonModule, GovukFrameComponent],
  templateUrl: './test-page4.component.html',
  styleUrl: './test-page4.component.scss',
})
export class TestPage4Component implements AfterContentInit, AfterViewInit {
  @ViewChild('anchorRef')  anchorRef!: ElementRef
  public topLeft = {x:0, y: 0};
  public size = {w:0, h: 0};
  private domRect? :DOMRect

  //TODO fix the initialisation bug here
  ngAfterViewInit(): void {
    console.log(this.anchorRef.nativeElement.getBoundingClientRect())
     this.domRect= this.anchorRef.nativeElement.getBoundingClientRect()
  }
  ngAfterContentInit(): void {
   // console.log(this.anchorRef.nativeElement.getBoundingClientRect())
    this.domRect= this.anchorRef.nativeElement.getBoundingClientRect()
    this.topLeft = { x: this.domRect!.x, y: this.domRect!.y};
    this.size = { w: this.domRect!.width, h: this.domRect!.height};
  }
}
