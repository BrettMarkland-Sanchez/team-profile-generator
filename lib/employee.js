// All Employee Class properties and methods
// name, id, email, getName(), getId(), getEmail(), getRole()
class Employee {
    // Class constructor
    constructor(name, email) {
        this.id = Employee.incrementId();
        this.name = name;
        this.email = email;
    };
    // Auto-increment method for new employee ID assignment, made static for independent operation.
    static incrementId() {
        if(!this.latestId){
            this.latestId = 1
        }else this.latestId++;
        return this.latestId;
    };
    // Class methods
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email}
    getRole() {return this.constructor.name};
};

module.exports = {Employee};