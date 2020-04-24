import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment5';
  zoomImageUrl:string="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
  imgUrlPaths:string[]=[
"https://toppng.com/uploads/preview/report-abuse-cool-skulls-11563326687icv4eekidn.png",
"https://png.pngtree.com/png-clipart/20190601/ourlarge/pngtree-vector-of-cool-monkey-head-with-fancy-drawing-style-png-image_1269744.jpg",
"https://image.pngaaa.com/648/27648-middle.png",
"https://www.pinclipart.com/picdir/middle/417-4170102_cedarbrook-k-8-center-pantera-para-logos-esports.png"
  ]
}
