// Imported dependencies
const { Manager } = require('./lib/manager');
const { Engineer } = require('./lib/engineer');
const { Intern } = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./utils/render')

// Staff array for storing Employee objects
const staff = [];

// Start function for running the program
function start() {
    // Starts with manager() then chains to query()
    manager();
}

// Inquirer function for gathering new Manager data
function manager() {
    console.log('Please provide information for your team manager.\n');
    inquirer.prompt([ // Manager data input section
        {   
            type: 'input',
            message: `What is the manager's name?`,
            name: 'name'
        },
        {
            type: 'number',
            message: `What is the manager's ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the manager's e-mail?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the manager's office number?`,
            name: 'office'
        }
    ]).then((data) => { // New Manager creation
        let employee = new Manager(data.name, data.id, data.email, data.office);
        employee.role = employee.getRole();
        // Add new Manager to the staff array
        staff.push(employee);
    }).then(() => query()); // Chain more options from query()
}

// Inquirer function for handling additional Employee data
function query() {
    inquirer.prompt([ // Additional Employee data input section
        {   
            type: 'list',
            message: `What do you want to do next?`,
            name: 'query',
            choices: [
                'Add an Engineer to your team roster',
                'Add an Intern to your team roster',
                'Exit program and generate team profile'
            ]
        }
    ]).then((input) => { // Switch handles function calling
        switch(input.query) {
            case 'Add an Engineer to your team roster': {
                engineer();
            } break;
            case 'Add an Intern to your team roster': {
                intern();
            } break;
            case 'Exit program and generate team profile': {
                writeFile(staff);
            } break;
        };
    });
}

// Inquirer function for gathering new Engineer data
function engineer() {
    console.log('Please provide information for your new engineer.');
    inquirer.prompt([ // Engineer data input section
        {   
            type: 'input',
            message: `What is the engineer's name?`,
            name: 'name'
        },
        {
            type: 'number',
            message: `What is the engineer's ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the engineer's e-mail?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the engineer's GitHub username?`,
            name: 'github'
        }
    ]).then((data) => { // New Engineer creation
        let employee = new Engineer(data.name, data.id, data.email, data.github);
        employee.role = employee.getRole();
        // Add new Engineer to the staff array
        staff.push(employee);
    }).then(() => query()); // Chain more options from query()
}

// Inquirer function for gathering new Intern data
function intern() {
    console.log('Please provide information for your new intern.');
    inquirer.prompt([ // Intern data input section
        {   
            type: 'input',
            message: `What is the intern's name?`,
            name: 'name'
        },
        {
            type: 'number',
            message: `What is the intern's ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the intern's e-mail?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What school does the intern attend?`,
            name: 'school'
        }
    ]).then((data) => { // New Intern creation
        let employee = new Intern(data.name, data.id, data.email, data.school);
        employee.role = employee.getRole();
        // Add new Intern to the staff array
        staff.push(employee);
    }).then(() => query()); // Chain more options from query()
}

// Uses code from render.js to create cards from staff array values
function writeFile(staff) {
    // Use a for-of loop here to generate HTML
    let html = fs.readFileSync('./src/teamRosterTop.html');
    for (const employee of staff) {
        html += render(employee);
    }
    html += fs.readFileSync('./src/teamRosterBottom.html');
    // Write final html content to the distribution folder
    fs.writeFile('./dist/index.html', html, err => {
        console.error(err);
    });
}

// Calls function start
start();