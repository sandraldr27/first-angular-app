import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Detalles Generales de la vivienda:</h2>
        <ul>
          <li><img src="/assets/images/m2.png" alt="m2 icon" width="18px" height="18px"> m2: {{housingLocation?.meters}}</li>
          <li><img src="/assets/images/room.png" alt="room icon" width="18px" height="18px"> Habitaciones: {{housingLocation?.rooms}}</li>
          <li><img src="/assets/images/garage.png" alt="garage icon" width="18px" height="20px"> Garage: {{housingLocation?.garage}}</li>
          <li><img src="/assets/images/bathroom.png" alt="bathroom icon" width="18px" height="20px"> Cuartos de Baño: {{housingLocation?.bathroom}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Contactar para más información</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">Nombre(s)</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Apellidos</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Enviar</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
