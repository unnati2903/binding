import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bindingAssignment';
  textInterpolation:string="this is example of text interpolation";
  propertyBinding:string="this is example of property binding";
  buttonAction:string="attribute binding";
  hero = "classBinding";
  g = document.getElementsByClassName(this.hero);
  twoWayBinding:string="two way binding";
  
    EventBiding(){
      alert("this is example of event binding");
    }
}
