import { faker } from "@faker-js/faker";
import { Entity } from "./TrackingMap";

export class Destination implements Entity {
  receiver: string;
  location: {
    lat: number;
    lon: number;
  };
  weight: number;

  constructor() {
    this.receiver = faker.name.firstName();
    console.log(this.location);
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.longitude(),
    };
  }

  popupText(): string {
    return `<h3>Reciver Name: ${this.receiver}</h3>`;
  }
}
