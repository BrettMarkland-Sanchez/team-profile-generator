// All Employee Class properties and methods
// name, id, email, getName(), getId(), getEmail(), getRole()
class Employee {
    // Class constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Class methods
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email}
    getRole() {return this.constructor.name};

    /* Auto-increment method for new employee ID assignment, made static for independent operation.
    static incrementId() {
        if(!this.latestId){
            this.latestId = 1
        }else this.latestId++;
        return this.latestId;
    };
    */
};

module.exports = {Employee};