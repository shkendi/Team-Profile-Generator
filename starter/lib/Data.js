// Define questions for gathering information about a manager

// const managerData = [
//     {
//         type: "input",
//         name: "name",
//         message: "Enter manager's name:",
//         //Validate if the input is not empy
//         validate: Validation.isNotEmpty
//     },

//     {
//         type: "input",
//         name: "id",
//         message: "Enter manager's id:",
//         //Validate if the id is not a negative integer and it is unique is not empy
//         validate: input =>  Validation.isIDValid(input, employees)
//     },

//     {
//         type: "input",
//         name: "email",
//         message: "Enter manager's email address:",
//         //Validate if the email address is valid
//         validate: Validation.validateEmail
//     },

//     {
//         type: "input",
//         name: "officeNumber",
//         message: "Enter manager's office number:",
//         //Validate if the office number is valid
//         validate: Validation.isOfficeNumber
//     },
// ]

// // Define questions for gathering information about an engineer

// const engineerData = [
//     {
//         type: "input",

//         name: "name",

//         message: "Enter engineer's name:",

//         // Validate if the input is not empty

//         validate: Validation.isNotEmpty
//     },
//     {

//         type: "input",

//         name: "id",

//         message: "Enter engineer's id:",

//         // Validate if the ID is non-negative integer and is it unique

//         validate: input =>  Validation.isIDValid(input, employees) 

//     },
//     {

//         type: "input",

//         name: "email",

//         message: "Enter engineer's email address:",

//         // Validate if the email address is valid

//         validate: Validation.validateEmail

//     }

// ]

// //question about GitHub username - separation of questions necessary 

// //to avoid race condition when making api request

// const GitHubData = [

//     {

//         type: "input",

//         name: "github",

//         message: "Enter engineer's GitHub username:",

//     }                      
// ]

// // Define questions for gathering data about an intern

// const internData = [

//     {

//         type: "input",

//         name: "name",

//         message: "Enter intern's name:",

//         // Validate if the input is not empty

//         validate: Validation.isNotEmpty

//     },
//     {

//         type: "input",

//         name: "id",

//         message: "Enter intern's id:",

//         // Validate if the ID is non-negative integer and is it unique

//         validate: input =>  Validation.isIDValid(input, employees) 

//     },
//     {

//         type: "input",

//         name: "email",

//         message: "Enter intern's email address:",

//         // Validate if the email address is valid

//         validate: Validation.validateEmail

//     },
//     {

//         type: "input",

//         name: "school",

//         message: "Enter intern's school:",

//         // Validate if the input is not empty

//         validate: Validation.isNotEmpty

//     }
// ]

// // Define a question for the menu selection

// const menuData = [

//     {

//     type: "list",

//     name: "menu",

//     message: "Choose one of the options:",

//     choices: ["Add an engineer", "Add an intern", "Finish building the team"]

//     }
// ]

// // Export all data arrays for use in other files
// export {managerData, engineerData, GitHubData,
//     internData, menuData};
