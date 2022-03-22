import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PropertyBinding';

  hrefVal = "http://google.com";
  updatedLink = "http://oracle.com";

  today=Date.now();
  title1="Style And Event Binding";
  title2="Pipes in Angular";

  color="blue";
  updateColor()
  {

    this.color='green';
  }
}
