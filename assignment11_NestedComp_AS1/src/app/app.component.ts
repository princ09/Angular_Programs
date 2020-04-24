import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookCollection  = {
    "Romance":["Dark Lover","Twilight","Halfway to the Grave","Darkfever"],
    "Action":["The Last Odyssey","Super Adjacent","Zero Divergence","Malice"],
    "Adventure":["Ivanhoe","Three Musketeers","Twenty Thousand Leagues Under the Sea","Treasure Island"]
  };
  showBook:string="Romance";
  title = 'assignment11';
  updateBookList(event):void{
    this.showBook = event;
  }
}
