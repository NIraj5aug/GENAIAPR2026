import assert from 'assert';
import { test } from 'node:test';
import { add } from '../index.js';

test('add function sums numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
