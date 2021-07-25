const {Employee} = require('./employee.js');

// All Manager Class properties and methods, * = inherited
// *name, *id, *email, officeNumber, *getName(), *getId(), *getEmail(), *getRole()
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
};

module.exports = {Manager};