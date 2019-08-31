import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EyesOnRobert';

  constructor() {}

  scroll(el) {
    document.getElementById(el);
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }
  getUrl() {
    return 'url(\'http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg\')';
  }
}
