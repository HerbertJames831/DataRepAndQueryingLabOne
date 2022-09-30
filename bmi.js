//Creating a BMI Class
class BMI {

    //Constructor with two arguments: height and weight
    //Also used to initilize data
    constructor(height, weight) {

        this.height = height;
        this.weight = weight;

    }

    //Method that returns the individual's bmi using the formula(let bmi = this.weight/(this.height**2);

    calculateBMI() {

        return this.weight / (this.height ** 2);


    }

}
//Creating an instance of the class and invoking the calculateBMI method

let personBMI = new BMI(1.7, 80);

console.log(personBMI.calculateBMI());