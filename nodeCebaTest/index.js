

//EXERCICE ONE

// async function getCountUsers() {
//   return { total: await got.get('https://my-webservice.moveecar.com/users/count') };
// }

// // Add total from service with 20
// async function computeResult() {
//   const result = getCountUsers();  <<====== ** NEEDS THE AWAIT COMMAND ****
//   return result.total + 20;
// }

async function getCountUsers() {
  return { total: await got.get('https://my-webservice.moveecar.com/users/count') };
}

// Add total from service with 20
async function computeResult() {
  const result = await getCountUsers();
  return result.total + 20;
}

// EXERCICE TWO

async function getTotalVehicles() {
  return await got.get('https://my-webservice.moveecar.com/vehicles/total');
}

// function getPlurial() {
//   let total;
//   getTotalVehicles().then(r => total = r); <==== CANNOT BE USED, IT IS ASYNC
//   if (total <= 0) {
//       return 'none';
//   }
//   if (total <= 10) {
//       return 'few';
//   }
//   return 'many';
// }

// option 1
async function getPlurial() {

  let total = await getTotalVehicles();
  if (total <= 0) {
    return 'none';
  }
  if (total <= 10) {
    return 'few';
  }
  return 'many';
}

import { expect, test } from '@jest/globals';

function getCapitalizeFirstWord(name) {
  if (name == null) {
    throw new Error('Failed to capitalize first word with null');
  }
  if (!name) {
    return name;
  }
  return name.split(' ').map(
    n => n.length > 1 ? (n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()) : n
  ).join(' ');
}



test('should capitalize the first word of a string', () => {
  const input = 'hello world';
  const expected = 'Hello world';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});

test('should handle an empty string', () => {
  const input = '';
  const expected = '';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});

test('should handle a null input', () => {
  expect(() => {
    getCapitalizeFirstWord(null);
  }).toThrowError('Failed to capitalize first word with null');
});

test('should handle a single-word input', () => {
  const input = 'single';
  const expected = 'Single';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});


test('should handle a string with special characters', () => {
  const input = 'hello, world!';
  const expected = 'Hello, world!';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});

test('should handle an all-uppercase input', () => {
  const input = 'ALL UPPERCASE';
  const expected = 'All uppercase';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});


