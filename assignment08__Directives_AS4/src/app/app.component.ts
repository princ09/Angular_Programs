import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .red {
      color: red;
    }

    .blue {
      color: blue;
    }
    .green {
      color: green;
    }
    .black{
      color: black;
    }
  `]
})
export class AppComponent {
  title = 'assignment8';
  color:string = '';
  colorr:string='';
}
