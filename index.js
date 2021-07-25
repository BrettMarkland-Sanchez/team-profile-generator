// Imported dependencies
const { Manager } = require('./lib/manager');
const { Engineer } = require('./lib/engineer');
const { Intern } = require('./lib/intern');
const inquirer = require('inquirer');
const validator = require('validator');

// Staff array for storing Employee objects
const staff = [];

// Start function for running the program
function start() {
    manager();
    query();
}

// Inquirer function for gathering new Manager data
function manager() {
    inquirer.prompt([ // Manager data input section
        {   
            type: 'input',
            message: `What is the Manager's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the Manager's ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the Manager's e-mail?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the Manager's office number?`,
            name: 'office'
        }
    ]).then((input) => { // User input validation
        if(typeof input.name !== "string"){
            console.error("The given name was not in string format. Please try again.");
            manager();
        }
        if(typeof input.id !== "number"){
            console.error("The given employee ID was not in number format. Please try again.");
            manager();
        }
        if(!validator.isEmail(input.email)){
            console.error("The given email was not in a valid format. Please try again.");
            manager();
        }
        if(!(typeof input.office == "string" || typeof input.office == "number")){
            console.error("The given office number was not in a valid format. Please try again.");
            manager();
        }
        return input;
    }).then((data) => { // New Manager creation
        let employee = new Manager(data.name, data.id, data.email, data.office);
        // Add new Manager to the staff array
        staff.push(employee);
    })
}

// Inquirer function for gathering additional Employee data
function query() {
    inquirer.prompt([ // Additional Employee data input section
        {   
            type: 'list',
            message: `What do you want to do next?`,
            name: 'query'
        }
    ])
}

// Uses code from render.js to create cards from staff array values
function render(arr) {
    // Use a for-of loop here to generate HTML 
}

// Calls function start
start();




