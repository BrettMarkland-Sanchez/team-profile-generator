const { Employee } = require('./lib/employee');
const { Manager } = require('./lib/manager');

const bob = new Manager('bob123@fakemail.com', 101);

console.log({bob});