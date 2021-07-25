const {Employee} = require('./employee.js');

// All Engineer Class properties and methods, * = inherited
// *name, *id, *email, github, *getName(), *getId(), *getEmail(), *getRole(), getGithub()
class Engineer extends Employee {
    // Class constructor
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
    // Class methods
    getGithub() {return this.github}
};

module.exports = {Engineer};