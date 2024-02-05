import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail);
  console.log('beforeAll()');
});
beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach()');
});
afterEach(() => {
  // user = new User(testEmail);
  console.log('afterEach()');
});
afterAll(() => {
  console.log('afterAll()');
});

// メインの機能が機能しているか
it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

// メインの機能が機能しなかった場合ちゃんと機能していないか
it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

// 初期値の設定大丈夫か
it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

// サブの機能がきのうするかどうか
it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
