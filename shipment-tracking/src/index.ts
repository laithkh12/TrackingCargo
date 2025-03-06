import { Cargo } from "./Cargo";
import { Destination } from "./Destination";
import { TrackingMap } from "./TrackingMap";

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

const trakingMap = new TrackingMap("g-map");
trakingMap.attachMaker(destination);
trakingMap.attachMaker(cargo);
