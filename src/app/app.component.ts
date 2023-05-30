import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main style="background-color: #f9f1fe;">
      <a [routerLink]="['/']">
        <header class="brand-name" style="margin-top: 50px;" style="background-color; #F9F1FE;">
          <img class="brand-logo" src="/assets/images/logo.png" alt="logo" aria-hidden="true" width="190" height="190" style="margin-top: -10px;">
          <i class="fab fa-facebook-f" style="float: right;"></i>
  <i class="fab fa-twitter" style="float: right;"></i>
  <i class="fab fa-instagram" style="float: right;"></i>

        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
