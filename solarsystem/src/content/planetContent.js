import jupiterIm from "../assets/jupiter.jpg";
import earthIm from "../assets/earth.jpg";
const baseMovement = 1;
const baseDistance = 1;
const baseSize = 1;

const mercury = {
    name: "mercury",
    size: .3504*baseSize,
    distance: 33*baseDistance,
    revSpeed: .005*baseMovement,
    tilt: 0,
    rotSpeed: 0.167,
    color: "lightgray",
    satellites: []
};
const venus = {
    name: "venus",
    size: .9*baseSize,
    distance: 67*baseDistance,
    revSpeed: .0035*baseMovement,
    tilt: 3,
    rotSpeed: 0.0041,
    color: "teal",
    satellites: []
};
const earth = {
    name: "earth",
    size: baseSize,
    distance: 93*baseDistance,
    revSpeed: 0.0027395*baseMovement,
    tilt: 23,
    rotSpeed: 1*baseMovement,
    color: "",
    satellites: []
};
const luna = {
    name: "luna",
    size: earth.size*.25*baseSize*3,
    distance: earth.size*4*baseSize,
    revSpeed: 0.0333*baseMovement,
    tilt: 5,
    rotSpeed: 0,
    color: "gray",
    satellites: []
};
earth.satellites.push(luna);
const mars = {
    name: "mars",
    size: .5*baseSize,
    distance: 142*baseSize,
    revSpeed: .0014*baseMovement,
    tilt: 25,
    rotSpeed: .5*baseMovement,
    color: "red",
    satellites: []
};
const phobos = {
    name: "phobos",
    size: mars.size*.0033*baseSize,
    distance: mars.size*4*baseSize,
    revSpeed: mars.revSpeed*3,
    tilt: 0,
    rotSpeed: 0,
    color: "white",
    satellites: []
};
const deimos = {
    name: "deimos",
    size: mars.size*.0019*baseSize,
    distance: mars.size*7*baseDistance,
    revSpeed: mars.revSpeed*1.26,
    rotSpeed: 0,
    color: "white",
    satellites: []
};
mars.satellites.push(phobos);
mars.satellites.push(deimos);
const jupiter = {
    name: "jupiter",
    size: 11*baseSize,
    distance: 484*baseDistance,
    revSpeed: .0005*baseMovement,
    tilt: 0,
    rotSpeed: .0001,
    color: "white",
    satellites: []
};
export default [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    luna,
    phobos,
    deimos
]