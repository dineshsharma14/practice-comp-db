import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  start: any;
  @Output() gameStarted = new EventEmitter<{ display: number }>();
  @Output() gameStoped = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  public onGameStart(): void {
    this.start = setInterval(() => {
      this.counter++;
      this.gameStarted.emit({ display: this.counter });
    }, 1000);
    // instead of emiting a JS object with one property display of type no.
    // you could have emitted the number straight away!
    // in that case @Output property should emit EventEmitter<number>()!
  }

  public onGameStop(): void {
    clearInterval(this.start);
    this.gameStoped.emit();
  }

}
