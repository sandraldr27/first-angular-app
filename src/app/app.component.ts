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
      <main style="background-color: #f9f1fe">
          <a [routerLink]="['/']">
            <header class="brand-name" style="margin-top: 50px" background-color= "#F9F1FE" width= "100%" overflow= "hidden">
                <img class="brand-logo" src="/assets/header/header.png" alt="logo" aria-hidden="true" style="margin-top: -60px" width= "100%">
            </header>
          </a>

          <section class="content">
              <router-outlet></router-outlet>
          </section>

          <div>
              <footer class="footer">
                  <div class="social-icons">
                      <a href="#" target="_blank"><img src="/assets/footer/facebook.png" alt="Facebook" width="50px" height="50px"></a>
                      <a href="#" target="_blank"><img src="/assets/footer/twitter.png" alt="Twitter" width="50px" height="50px"></a>
                      <a href="#" target="_blank"><img src="/assets/footer/instagram.png" alt="Instagram" width="50px" height="50px"></a>
                      <a href="#" target="_blank"><img src="/assets/footer/linkedin.png" alt="Instagram" width="50px" height="50px"></a>
                      <a href="#" target="_blank"><img src="/assets/footer/pinterest.png" alt="Instagram" width="50px" height="50px"></a>
                  </div>

                  <div class="info-footer">
                      <p><img src="/assets/footer/ubication.png" alt="ubication icon" width="20px" height="20px"> Avenida del Pool Frontend s/n. CP 29651, Mijas - Málaga</p>
                      <p><img src="/assets/footer/mail.png" alt="mail icon" width="20px" height="20px"> sandraldr@realestatefrontend.com</p>
                      <p><img src="/assets/footer/phone.png" alt="phone icon" width="20px" height="20px"> +34 123456789</p>
                      <p>&copy; <b>2023 SANDRALDR Real Estate.</b> Todos los derechos reservados.</p>
                  </div>
              </footer>
          </div>
      </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
