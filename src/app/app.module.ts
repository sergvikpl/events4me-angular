import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AgreementComponent } from './pages/agreement/agreement.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    AgreementComponent,
    NavigationBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
