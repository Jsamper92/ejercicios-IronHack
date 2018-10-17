// Rover Object Goes Here
// ======================
var rover = {
    direction: 'N',
    position: [0, 0],
};

var tablero = new Array(10);

for (i = 0; i < tablero.length; i++) {
    tablero[i] = new Array(10);
}
// ======================

console.log("la direccion actual del robot es: " + rover.direction);
console.log("la posicion actual del robot es :" + rover.position);
console.log("tablero: " + tablero);

function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log(rover)
}

function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'N';
            break;
    }

    console.log(rover);
}

function moveForward(rover) {
    console.log("moveForward was called")
    switch (rover.direction) {
        case 'N':
            rover.position[0] = rover.position[0] - 1;
            break;

        case 'E':
            rover.position[1] = rover.position[1] - 1;
            break;

        case 'S':
            rover.position[0] = rover.position[0] - 1;
            break;

        case 'W':
            rover.position[1] = rover.position[1] + 1;
            break;
    }
    console.log(rover)
}