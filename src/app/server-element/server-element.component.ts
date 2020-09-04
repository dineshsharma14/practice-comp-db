import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) heading: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("server-element constructor called");
  }

  ngOnInit(): void {
    console.log("server-element ngOnInit() called");
    console.log("Text content:" + this.heading.nativeElement.textContent);
    console.log("Text content of para:" + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("server-element ngOnChanges worked");
    console.log(changes);
    console.log("out of server-element ngOnChanges");
  }

  ngDoCheck() {
    console.log("server-element ngDoCheck() called!");
  }

  ngAfterContentInit() {
    console.log("server-element ngAfterContentInit()");
    console.log("Text content of para:" + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("server-element ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("server-element ngAfterViewInit()");
    console.log("Text content:" + this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("server-element ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("The last pushed item getting destroyed!!");
  }

}
