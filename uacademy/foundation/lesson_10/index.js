

class myClass {
    constructor (name) {
        this.name = name
    }

    getFactarial (num) {
        if (num === 1) {
            return 1
        } else return num * this.getFactarial(num - 1)
    }
}


class neighbour extends myClass {
    constructor (name) {
        super(name)
    }

    getFactarial (num) {
        if (num === 0) {
            return 0
        } else return num + this.getFactarial(num - 1)
    }
}

const getClass = new neighbour()

console.log(getClass.getFactarial(4)); 10