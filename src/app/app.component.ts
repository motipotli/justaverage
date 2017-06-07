import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/views/home.html`
})
export class AppComponent  {
  showElement=true;
  showSalary=false;
  dob=new Date(1991,11,13);
  salary=1400000;
  cols=1;
  rows=2;
  technologies =[
    'Advanced Java | J2EE',
    'Machine Learning',
    'Python',
    'Hadoop',
    'MR',
    'Hive',
    'PIG',
    'AngularJS 1&2/4',
    'Spring MVC',
    'Rest API',
    'Angular Material',
    'SQL',
    'Shell Scripting',
    'HTML',
    'CSS'];
}
