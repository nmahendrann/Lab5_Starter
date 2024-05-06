// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('Unit tests', () => {
  test('isPhoneNumber - valid 1', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('isPhoneNumber - valid 2', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('isPhoneNumber - invalid 1', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('isPhoneNumber - invalid 2', () => {
    expect(isPhoneNumber('123-456')).toBe(false);
  });

  test('isEmail - valid 1', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('isEmail - valid 2', () => {
    expect(isEmail('test_user@example.co')).toBe(true);
  });
  test('isEmail - invalid 1', () => {
    expect(isEmail('test@.com')).toBe(false);
  });
  test('isEmail - invalid 2', () => {
    expect(isEmail('test.com')).toBe(false);
  });

  test('isStrongPassword - valid 1', () => {
    expect(isStrongPassword('Test1234')).toBe(true);
  });
  test('isStrongPassword - valid 2', () => {
    expect(isStrongPassword('A_1234567890')).toBe(true);
  });
  test('isStrongPassword - invalid 1', () => {
    expect(isStrongPassword('1234')).toBe(false);
  });
  test('isStrongPassword - invalid 2', () => {
    expect(isStrongPassword('A')).toBe(false);
  });

  test('isDate - valid 1', () => {
    expect(isDate('01/01/2020')).toBe(true);
  });
  test('isDate - valid 2', () => {
    expect(isDate('12/31/2020')).toBe(true);
  });
  test('isDate - invalid 1', () => {
    expect(isDate('2020/01/01')).toBe(false);
  });
  test('isDate - invalid 2', () => {
    expect(isDate('01-01-2020')).toBe(false);
  });

  test('isHexColor - valid 1', () => {
    expect(isHexColor('#123')).toBe(true);
  });
  test('isHexColor - valid 2', () => {
    expect(isHexColor('#123456')).toBe(true);
  });
  test('isHexColor - invalid 1', () => {
    expect(isHexColor('#12')).toBe(false);
  });
  test('isHexColor - invalid 2', () => {
    expect(isHexColor('#12345')).toBe(false);
  });
});
