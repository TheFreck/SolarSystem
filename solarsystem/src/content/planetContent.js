import jupiterIm from "../assets/jupiter.jpg";
import earthIm from "../assets/earth.jpg";
import { distance } from "three/tsl";

const mercury = {
    name: "mercury",
    size: .3504,
    distance: 11.58,
    revSpeed: .00298,
    tilt: 0,
    rotSpeed: 0,
    color: "brown",
    satellites: []
};
const venus = {
    name: "venus",
    size: .8691,
    distance: 21.64,
    revSpeed: .00217,
    tilt: 0,
    rotSpeed: 0,
    color: "teal",
    satellites: []
};
const earth = {
    name: "earth",
    size: .9149,
    distance: 29.92,
    revSpeed: .0015,
    tilt: 23,
    rotSpeed: .1,
    color: "",
    satellites: []
};
const luna = {
    name: "luna",
    size: earth.size*.27,
    distance: earth.distance*.1,
    revSpeed: -.095,
    tilt: 0,
    color: "gray",
    rotSpeed: 0,
    satellites: []
};
earth.satellites.push(luna);
const mars = {
    name: "mars",
    size: .4868,
    distance: 45.58,
    revSpeed: .00075,
    tilt: 25,
    rotSpeed: .1,
    color: "red",
    satellites: []
};
const phobos = {
    name: "phobos",
    size: .1,
    distance: mars.distance*.0225,
    revSpeed: -mars.rotSpeed*.9,
    tilt: 0,
    rotSpeed: 0,
    color: "white",
    satellites: []
};
const deimos = {
    name: "deimos",
    size: .175,
    distance: mars.distance*.075,
    revSpeed: -mars.rotSpeed*.95,
    rotSpeed: 0,
    color: "white",
    satellites: []
};
mars.satellites.push(phobos);
mars.satellites.push(deimos);
const jupiter = {
    name: "jupiter",
    size: 10.0398,
    distance: 155.72,
    revSpeed: .0081,
    tilt: 0,
    rotSpeed: .1,
    color: "white",
    satellites: []
};
export default [
    mercury,
    venus,
    earth,
    mars,
    jupiter

]