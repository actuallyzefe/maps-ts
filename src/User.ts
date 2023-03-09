import { faker } from '@faker-js/faker';

export class User {
  name: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.color = faker.color.rgb();
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return this.name;
  }
}
