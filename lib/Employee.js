// TODO: Write code to define and export the Employee class
// const Employee = require("./Employee")
// Define a class called Employee

class Employee {

      // Constructor function that initializes the Employee object with a name, id, and email
    constructor(name, id, email) {

        this.name = name

        this.id = id

        this.email = email

    }

    // Get the name of the Employee
    getName() {
        return this.name
    }

    // Get the id of the Employee

    getId() {
        return this.id
    }

    // Get the email of the Employee

    getEmail() {
        return this.email
    }

    // Get the role of the Employee

    getRole() {
         // Return the name of the class ("Employee")
        return this.name
    }
}

// Export the Employee class to make it available for use in other files
module.exports = Employee