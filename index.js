const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
//  import engineer and intern

const generateHTML = require("./src/generateHTML");

const employeeArray = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the manager's id number?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "managerEmail",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      reponse.managerName,
      response.managerId,
      response.managerEmail,
      response.managerOfficeNumber
    );
    employeeArray.push(manager);

    confirmNext()
  });
}

function confirmNext(){
    inquirer.prompt([{
        type:"confirm",
        message:"Do you want to add more employees?",
        name:"addMore"

    }])
    .then(response=>)
}

init();
