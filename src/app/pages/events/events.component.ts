import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'events-page',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAddEventPage() {
    this.router.navigate(['events/add']);
  }
  goToEditEventPage() {
    this.router.navigate(['events/card/edit']);
  }

  faSearch = faSearch

}
