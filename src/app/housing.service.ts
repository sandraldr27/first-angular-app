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
      meters: 130,
      rooms: 4,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 1,
      name: 'Chalet Pareado',
      city: 'Marbella',
      state: 'Málaga',
      photo: '/assets/images/house2.jpg',
      meters: 120,
      rooms: 5,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 2,
      name: 'Chalet Clásico',
      city: 'Fuengirola',
      state: 'Málaga',
      photo: '/assets/images/house3.jpg',
      meters: 140,
      rooms: 4,
      garage: 'Sí',
      bathroom: 3
    },
    {
      id: 3,
      name: 'Chalet Clásico',
      city: 'San Pedro de Alcántara',
      state: 'Málaga',
      photo: '/assets/images/house4.jpg',
      meters: 120,
      rooms: 3,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 4,
      name: 'Chalet Independiente',
      city: 'Amoeiro',
      state: 'Ourense',
      photo: '/assets/images/house5.jpg',
      meters: 130,
      rooms: 4,
      garage: 'Sí',
      bathroom: 3
    },
    {
      id: 5,
      name: 'Chalet Independiente',
      city: 'Avilés',
      state: 'Asturias',
      photo: '/assets/images/house6.jpg',
      meters: 145,
      rooms: 5,
      garage: 'Sí',
      bathroom: 4
    },
    {
      id: 6,
      name: 'Adosado Una Sola Planta',
      city: 'Mijas Pueblo',
      state: 'Málaga',
      photo: '/assets/images/house7.jpg',
      meters: 78,
      rooms: 3,
      garage: 'No',
      bathroom: 1
    },
    {
      id: 7,
      name: 'Chalet de una Planta',
      city: 'Redondela',
      state: 'Vigo',
      photo: '/assets/images/house8.jpg',
      meters: 100,
      rooms: 4,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 8,
      name: 'Chalet Moderno',
      city: 'La Rinconada',
      state: 'Sevilla',
      photo: '/assets/images/house9.jpg',
      meters: 138,
      rooms: 3,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 9,
      name: 'Chalet Pareado',
      city: 'Estepona',
      state: 'Málaga',
      photo: '/assets/images/house10.jpg',
      meters: 132,
      rooms: 4,
      garage: 'Sí',
      bathroom: 3
    },
    {
      id: 10,
      name: 'Chalet Pareado',
      city: 'Benalmádena',
      state: 'Málaga',
      photo: '/assets/images/house11.jpg',
      meters: 118,
      rooms: 3,
      garage: 'Sí',
      bathroom: 2
    },
    {
      id: 11,
      name: 'Chalet Independiente',
      city: 'O Portiño',
      state: 'A Coruña',
      photo: '/assets/images/house12.jpg',
      meters: 143,
      rooms: 5,
      garage: 'Sí',
      bathroom: 4
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
