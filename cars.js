
//Creating a Vehicle Class
class Vehicle {

    //Constructor 
    constructor(make, model, year) {

        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Method
    Information() {

        console.log(this.make);
        console.log(this.model);
        console.log(this.year);

    }

}

//Cars class inheriting from Vehicle Class
class Cars extends Vehicle {

    //Constructor
    constructor(make, model, year, doors) {
        //Invoking Vehicle Class'(Parent Class) constructor and passed three arguments for make, model and year
        super(make, model, year);
        this.doors = doors;

    }
    //Method
    Information() {

        //Invoking the Information Method from the Vehicle class
        super.Information();

        //Writing the number of doors to the console
        console.log("The number of doors is: ", this.doors);

    }

}
//Creating an instance of Cars Class
let carsInfo = new Cars("Honda", "Civic", "1972", "4");
carsInfo.Information();
