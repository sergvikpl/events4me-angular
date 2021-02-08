import { Component, OnInit } from '@angular/core';
import { faHome, faHandshake, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faHome = faHome;
  faHandshake = faHandshake;
  faSignInAlt = faSignInAlt;

}
