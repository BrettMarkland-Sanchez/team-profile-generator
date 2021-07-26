const {Employee} = require('./employee.js');

// All Manager Class properties and methods, * = inherited
// *name, *id, *email, officeNumber, *getName(), *getId(), *getEmail(), *getRole(), getOfficeNumber()
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    // Class methods
    getOfficeNumber() {return this.officeNumber}
};

module.exports = {Manager};