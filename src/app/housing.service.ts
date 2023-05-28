import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Chalet Independiente',
      city: 'Santiago de Compostela',
      state: 'A Coruña',
      photo: '/assets/images/house1.jpeg',
      rooms: 4,
      Garage: true,
      bathroom: true
    },
    {
      id: 1,
      name: 'Chalet Pareado',
      city: 'Marbella',
      state: 'Málaga',
      photo: '/assets/images/house2.jpg',
      rooms: 5,
      Garage: false,
      bathroom: true
    },
    {
      id: 2,
      name: 'Chalet Clásico',
      city: 'Fuengirola',
      state: 'Málaga',
      photo: '/assets/images/house3.jpg',
      rooms: 4,
      Garage: false,
      bathroom: false
    },
    {
      id: 3,
      name: 'Chalet Clásico',
      city: 'San Pedro de Alcántara',
      state: 'Málaga',
      photo: '/assets/images/house4.jpg',
      rooms: 3,
      Garage: true,
      bathroom: false
    },
    {
      id: 4,
      name: 'Chalet Independiente',
      city: 'Amoeiro',
      state: 'Ourense',
      photo: '/assets/images/house5.jpg',
      rooms: 4,
      Garage: true,
      bathroom: false
    },
    {
      id: 5,
      name: 'Chalet Independiente',
      city: 'Avilés',
      state: 'Asturias',
      photo: '/assets/images/house6.jpg',
      rooms: 5,
      Garage: true,
      bathroom: true
    },
    {
      id: 6,
      name: 'Adosado Una Sola Planta',
      city: 'Mijas Pueblo',
      state: 'Málaga',
      photo: '/assets/images/house7.jpg',
      rooms: 5,
      Garage: true,
      bathroom: true
    },
    {
      id: 7,
      name: 'Chalet de una Planta',
      city: 'Redondela',
      state: 'Vigo',
      photo: '/assets/images/house8.jpg',
      rooms: 4,
      Garage: true,
      bathroom: true
    },
    {
      id: 8,
      name: 'Chalet Moderno',
      city: 'La Rinconada',
      state: 'Sevilla',
      photo: '/assets/images/house9.jpg',
      rooms: 3,
      Garage: false,
      bathroom: false
    },
    {
      id: 9,
      name: 'Chalet Pareado',
      city: 'Estepona',
      state: 'Málaga',
      photo: '/assets/images/house10.jpg',
      rooms: 4,
      Garage: true,
      bathroom: true
    },
    {
      id: 10,
      name: 'Chalet Pareado',
      city: 'Benalmádena',
      state: 'Málaga',
      photo: '/assets/images/house11.jpg',
      rooms: 3,
      Garage: true,
      bathroom: true
    },
    {
      id: 11,
      name: 'Chalet Independiente',
      city: 'O Portiño',
      state: 'A Coruña',
      photo: '/assets/images/house12.jpg',
      rooms: 5,
      Garage: true,
      bathroom: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
