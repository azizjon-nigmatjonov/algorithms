class Vehicle {
    constructor(_wheels) {
        this.newWheels = _wheels;
    }
    get wheels() {
        return this.newWheels;
    }
    set wheels(_wheels) {
        this.newWheels = _wheels;
    }
    static accelerate() {
        console.log('go faster')
    }
    static decelerate() {
        console.log('go slower')
    }
    justMethod() {
        // like a function
    }
}

let car = new Vehicle(4)
let car2 = new Vehicle(7)
let car3 = new Vehicle(8)
// car.wheels = 7
console.log(car.wheels)
Vehicle.accelerate()

class Car extends Vehicle{
    constructor(_wheels, _make, _model, _year) {
        super(_wheels)
        this.make = _make
        this.model = _model
        this.year = _year
    }
    info() {
        console.log('The', this.make, this.model, 'was made', this.year, 'and has', this.wheels, 'wheels')
    }
}

let ferrari = new Car(4, 'Ferarri', 'Testarossa', 1985)

ferrari.info()