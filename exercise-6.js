function getKeys(obj) {
  let arrKeys = [];
  for (const key in obj) {
    if (Object.keys(obj)) {
      arrKeys.push(key)
    }
  }
  return arrKeys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);