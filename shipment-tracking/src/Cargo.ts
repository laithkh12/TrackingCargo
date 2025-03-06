import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { Entity } from "./TrackingMap";

export class Cargo implements Entity {
  trackingId: string;
  location: {
    lat: number;
    lon: number;
  };
  weight: number;

  constructor() {
    // Use uuidv4() to generate a unique tracking ID
    this.trackingId = uuidv4();
    this.location = {
      lat: +faker.address.latitude(),
      lon: +faker.address.longitude(),
    };
  }

  popupText(): string {
    return `<h3>Cargo Name: ${this.trackingId}</h3>`;
  }
}
