# [SolarSystem](https://thefreck.github.io/SolarSystem/)

This project is built with React and uses the amazing library [Three.js](https://threejs.org/).

The sun is a mesh that contains a pointlight.
Each of the planets are built with sphereGeometry. To acheive earth's 23&deg; tilt I had to embed a mesh (planet) inside a mesh (spoke) inside a mesh (hub). The hub rotates causing the revolution around the sun, the spoke rotates to create the tilt and the planet rotates causing its rotation.

Moons are created by adding planets as children of planets.

The astroid belt is generated with roughly 1000 astroids. About 16% of them will have an astroid obiting it. This matches known binary astroids in our own belt.

Earth and Jupiter have skins to make them look like the actual planets. Future iterations of this will include moons for Mars and Jupiter and I will add Saturn, its rings and its moons.
