class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const cars=[new car("Mustang", 2023),new car("BMW", 2022),new car("Ferrari", 2021)]
console.log(cars[0].name)
console.log(cars[1].name)
console.log(cars[2].name)
