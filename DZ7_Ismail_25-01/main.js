class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }

    start() {
        return console.log('Машина заведена')
    }

}
const car1 = new Cars({
    model: 'BMW',
    color: 'black',
    wheels: 4
})
car1.start()

class Toyota extends Cars{
    constructor(options) {
        super(options);
        this.tuning = options.tuning
    }
}class Audi extends Cars{
    constructor(options) {
        super(options);
        this.railing = options.railing
    }
}class Subaru extends Cars{
    constructor(options) {
        super(options);
        this.trunk = options.trunk
    }
}

const toyota = new Toyota({
    model: 'Toyota',
    color: 'white',
    wheels: 4
})
const audi = new Audi({
    model: 'Audi1',
    color: 'red',
    wheels: 4
})
const subaru = new Subaru({
    model: 'Subaru',
    color: 'blue',
    wheels: 4
})


//////////


class Svetofor {
     constructor(options) {
        this.stop = options.stop
        this.wait = options.wait
        this.go = options.go
    }
}
    const svetofor = new Svetofor({
        stop: 'red',
        wait: 'yellow',
        go: 'green'
    })
