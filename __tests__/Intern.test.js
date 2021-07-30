const { Intern } = require('../lib/intern');

test('Creates a new object from the Intern class.', () => {
    let intern = new Intern('Chuck', 1, 'ctesta@fakemail.com', 'fake uni');
    
    const arr = Object.getOwnPropertyNames(intern);

    expect(intern instanceof Intern).toBe(true);

    expect(arr[0]).toBe('name');
    expect(arr[1]).toBe('id');
    expect(arr[2]).toBe('email');
    expect(arr[3]).toBe('school');
});