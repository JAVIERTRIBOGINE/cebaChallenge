// import { xpect, test } from '@jest/globals';

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
  const expected = 'Hello World';
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
  const expected = 'Hello, World!';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});

test('should handle an all-uppercase input', () => {
  const input = 'ALL UPPERCASE';
  const expected = 'All Uppercase';
  const result = getCapitalizeFirstWord(input);
  expect(result).toBe(expected);
});


