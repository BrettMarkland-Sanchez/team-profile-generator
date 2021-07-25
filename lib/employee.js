class Employee {
    constructor(email) {
        this.id = Employee.incrementID();
        this.email = email;
    }
    // Auto-increment function for new employee ID assignment, made static for independent operation.
    static incrementID() {
        if(!this.latestId){
            this.latestId = 1
        }else this.latestId++;
        return this.latestId;
    }
};

module.exports = {Employee};