const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require("fs");
const team = [];
const { generateMarkdown } = require("../src/generateMarkdown")


class Team {
    constructor() {

    }


    makeTeam() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "manName",
                    message: "What is the manager's name"
                },
                {
                    type: "input",
                    name: "manId",
                    message: "What is the manager's ID"
                },
                {
                    type: "input",
                    name: "manEmail",
                    message: "What is the manager's Email"
                },
                {
                    type: "input",
                    name: "officeNum",
                    message: "What is the manager's office number"
                },
            ])
            .then(data => {

                team.push(new Manager(data.manName, data.manId, data.manEmail, data.officeNum));
                console.log("1", team);
                this.addMember();
            });
    };

    makeIntern() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "inName",
                    message: "What is the intern's name"
                },
                {
                    type: "input",
                    name: "inId",
                    message: "What is the intern ID"
                },
                {
                    type: "input",
                    name: "inEmail",
                    message: "What is the intern Email"
                },
                {
                    type: "input",
                    name: "inSchool",
                    message: "What is the intern's School"
                },
            ])
            .then(data => {
                team.push(new Intern(data.inName, data.inId, data.inEmail, data.inSchool));
                this.addMember()

            });
    };

    makeEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "engName",
                    message: "What is the engineer's name"
                },
                {
                    type: "input",
                    name: "engId",
                    message: "What is the engineer ID"
                },
                {
                    type: "input",
                    name: "engEmail",
                    message: "What is the engineer Email"
                },
                {
                    type: "input",
                    name: "engGithub",
                    message: "What is the engineer's Github"
                },
            ])
            .then(data => {
                team.push(new Engineer(data.engName, data.engId, data.engEmail, data.engGithub));
                this.addMember();
            });
    }
    addMember() {
        return inquirer
        .prompt(
            {
                    type: "list",
                    name: "addMem",
                    message: "Do you want to add more members?",
                    choices: ["Add an Intern", "Add an engineer", "dont add any more members"]
            }
        )
            .then((data)=> {
                if (data.addMem === "Add an Intern") this.makeIntern();
                else if (data.addMem === "Add an engineer") this.makeEngineer(); 
                else fs.writeFile("./dist/index.html", generateMarkdown(team), err => (console.error(err), console.log("test",team)))
            }
                )
            
    }
}

module.exports = Team;