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

  events = [
    {id: "id1", name: "name1", dateStart: "dateStart1", dateEnd: "dateEnd2", address: "address1", organizationName: "organization1" },
    {id: "id2", name: "name2", dateStart: "dateStart2", dateEnd: "dateEnd2", address: "address2", organizationName: "organization2" },
    {id: "id3", name: "name3", dateStart: "dateStart3", dateEnd: "dateEnd2", address: "address3", organizationName: "organization3" },
    {id: "id4", name: "name4", dateStart: "dateStart4", dateEnd: "dateEnd2", address: "address4", organizationName: "organization4" },
    {id: "id5", name: "name5", dateStart: "dateStart5", dateEnd: "dateEnd2", address: "address5", organizationName: "organization5" },
    {id: "id6", name: "name6", dateStart: "dateStart6", dateEnd: "dateEnd2", address: "address6", organizationName: "organization6" },
    {id: "id7", name: "name7", dateStart: "dateStart7", dateEnd: "dateEnd2", address: "address7", organizationName: "organization7" },
    {id: "id8", name: "name8", dateStart: "dateStart8", dateEnd: "dateEnd2", address: "address8", organizationName: "organization8" },
    {id: "id9", name: "name9", dateStart: "dateStart9", dateEnd: "dateEnd2", address: "address9", organizationName: "organization9" },
    {id: "id10", name: "name10", dateStart: "dateStart10", dateEnd: "dateEnd2", address: "address10", organizationName: "organization10" },
  ]

}
