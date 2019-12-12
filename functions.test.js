const functions = require('./functions');

// running something before and after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => console.log('Database initialised...');
// const closeDatabase = () => console.log('Database closed...');

// running something before and after all tests
// beforeAll(() => start());
// afterAll(() => end());

// const start = () => console.log('Start something before all the tests run...');
// const end = () => console.log('End something after all tests have run...');

// running something only in this describe
// const nameCheck = () => console.log('Checking Name...');

// describe('Checking Names', () => {
// beforeEach(() => nameCheck());

//  test('User is Jeff', () => {
//    const user = 'Jeff';
//    expect(user).toBe('Jeff');
//  });

//  test('User is Karen', () => {
//    const user = 'Karen';
//    expect(user).toBe('Karen');
//  });
// });

// tests
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be Brad Traversy', () => {
  expect(functions.createUser()).toEqual({ firstname: 'Brad', lastname: 'Traversy'});
});

test('Should be under 1600', () => {
  const load1 = 500;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
})

test('Admin should be in usernames', () => {
  usernames = ['john', 'jill', 'admin']
  expect(usernames).toContain('admin');
})

//working with async data

//Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
})

//Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})
