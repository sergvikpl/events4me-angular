import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AgreementComponent } from './pages/agreement/agreement.component';
import { LoginComponent } from './pages/login/login.component';
import { EventsComponent } from './pages/events/events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'login', component: LoginComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/add', component: EditEventComponent },
  { path: 'events/card/edit', component: EditEventComponent },

  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
