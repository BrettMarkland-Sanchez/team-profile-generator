const { Employee } = require('./lib/employee');
const { Manager } = require('./lib/manager');
const { Engineer } = require('./lib/engineer');
const { Intern } = require('./lib/intern');

const bob = new Manager('Bob', 'bob123@fakemail.com', 101);

console.log({bob}, bob.getRole());