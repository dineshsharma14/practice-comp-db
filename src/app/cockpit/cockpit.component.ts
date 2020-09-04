import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  //newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //@ViewChild("serverContentInput", { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddServer(nameInput: HTMLInputElement) {
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: this.newServerContent });
  }

  // onAddBlueprint(nameInput: HTMLInputElement) {
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: this.newServerContent });
  }

}
