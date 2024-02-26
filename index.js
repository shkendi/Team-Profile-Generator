const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Prompt Questions to gather information about development team members

const teamManagerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Enter manager's name:",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
        }
    },

    {
        type: "input",
        name: "managerId",
        message: "Enter manager's id:",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    },

    {
        type: "input",
        name: "managerEmail",
        message: "Enter manager's email:",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    },

    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter manager's office number:",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Enter engineer's name:",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
        }
    },

    {
        type: "input",
        name: "engineerId",
        message: "Enter engineer's id:",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    },

    {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer's email:",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    },

    {
        type: "input",
        name: "engineerGitHub",
        message: "Enter engineer's GitHub username:",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
        }
    }
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Enter intern's name:",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter at least one character.";
        }
    },

    {
        type: "input",
        name: "internId",
        message: "Enter intern's id:",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a positive number greater than zero.";
        }
    },

    {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email:",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address.";
        }
    },

    {
        type: "input",
        name: "internSchool",
        message: "Enter the name of the intern's school:",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter a valid email address.";
        }
    }
];

const teamMembers = [];

//Start prompt
function appMenu() {
    console.log("Please build your team")
    createManager()
}

//gather info on Manager
function createManager() {
    inquirer.prompt(teamManagerQuestions).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        teamMembers.push(manager)
        // idArray.push(answers.managerId);
        createTeam()
    })
}

//Gather info on Engineer
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
        teamMembers.push(engineer)
        // idArray.push(answers.engineerId)
        createTeam()
    })
}

// Gather info on Intern
function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamMembers.push(intern)
        createTeam()
    })
}

//Options to add team members or exit menu and build team with existing info
function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
                case "Intern":
                addIntern();
                break;
                default:
                    buildTeam();
        }
    });
}

// function to write HTML file
function writeToFile(fileName, teamMembers) {
    fs.writeFile("team.html", render(teamMembers),
    (err) =>err? console.log("error") : console.log("Generating HTML..."))
}

function buildTeam() {
    console.log(teamMembers)
    writeToFile("team.html", teamMembers)
}

appMenu()





