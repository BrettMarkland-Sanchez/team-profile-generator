const { Engineer } = require('../lib/engineer');

test('Creates a new object from the Engineer class.', () => {
    let engineer = new Engineer('Chuck', 1, 'ctesta@fakemail.com', 'ctesta');
    
    const arr = Object.getOwnPropertyNames(engineer);

    expect(engineer instanceof Engineer).toBe(true);

    expect(arr[0]).toBe('name');
    expect(arr[1]).toBe('id');
    expect(arr[2]).toBe('email');
    expect(arr[3]).toBe('github');
});