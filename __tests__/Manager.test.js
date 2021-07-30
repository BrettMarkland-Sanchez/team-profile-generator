const { Manager } = require('../lib/manager');

test('Creates a new object from the Manager class.', () => {
    let manager = new Manager('Chuck', 1, 'ctesta@fakemail.com', '212');
    
    const arr = Object.getOwnPropertyNames(manager);

    expect(manager instanceof Manager).toBe(true);

    expect(arr[0]).toBe('name');
    expect(arr[1]).toBe('id');
    expect(arr[2]).toBe('email');
    expect(arr[3]).toBe('officeNumber');
});