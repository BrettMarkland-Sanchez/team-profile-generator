const {Employee} = require('./employee.js');

class Manager extends Employee {
    constructor(email, office) {
      super(email);
      this.office = office;
    }
};

module.exports = {Manager};