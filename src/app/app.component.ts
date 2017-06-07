import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/views/home.html`
})
export class AppComponent  {
  showElement=true;
  dob=new Date(1991,11,13);
  salary=1400000;
  technologies =['Advanced Java','AngularJS 1/2/4','SQL','Shell Scripting','HTML'];
}
