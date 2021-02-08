import { Component } from '@angular/core';
import { faHome, faHandshake, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'events4me-angular';
  faHome = faHome;
  faHandshake = faHandshake;
  faSignInAlt = faSignInAlt;
}
