import { faker } from '@faker-js/faker';
import { MarkerFor } from './CustomMap';

export class Company implements MarkerFor {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.color = faker.color.rgb();
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h4>Company name is: ${this.companyName}</h4>
    Catch Phrase: ${this.catchPhrase}
    `;
  }
}
