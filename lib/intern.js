const {Employee} = require('./employee.js');

// All Intern Class properties and methods, * = inherited
// *name, *id, *email, school, *getName(), *getId(), *getEmail(), *getRole(), getSchool()
class Intern extends Employee {
    // Class constructor
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    // Class methods
    getSchool() {return this.school}
};

module.exports = {Intern};