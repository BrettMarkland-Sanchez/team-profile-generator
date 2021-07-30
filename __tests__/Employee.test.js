const { Employee } = require('../lib/employee');

test('Creates a new object from the Employee class.', () => {
    let employee = new Employee('Chuck', 1, 'ctesta@fakemail.com');
    
    const arr = Object.getOwnPropertyNames(employee);

    expect(employee instanceof Employee).toBe(true);

    expect(arr[0]).toBe('name');
    expect(arr[1]).toBe('id');
    expect(arr[2]).toBe('email');
});