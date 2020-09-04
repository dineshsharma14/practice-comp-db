import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'practice-comp-db';
  //serverElements = [{ type: 'server', name: 'testServer', content: 'Just a test!' }];
  serverElements = [];
  aString: string = "";
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "changed!" + this.aString;
    this.aString += " again";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onGameStart(incomer: { display: number }) {
    console.log("game started!");
    console.log(incomer.display);
    if (incomer.display % 2 === 0) {
      this.evenNumbers.push(incomer.display);
      console.log(incomer.display);
    } else {
      this.oddNumbers.push(incomer.display);
      console.log("**" + incomer.display);
    }
  }

  onGameStop() {
    console.log("game stoped!");
  }

}
