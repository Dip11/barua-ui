import { describe, test, expect } from 'vitest'
import { normalize } from './string'

describe('normalize', () => {
  test('lowercases the input', () => {
    expect(normalize('HELLO')).toBe('hello')
  })

  test('trims whitespace', () => {
    expect(normalize('  hello  ')).toBe('hello')
  })

  test('handles mixed case and whitespace together', () => {
    expect(normalize('  Hello World  ')).toBe('hello world')
  })

  test('returns empty string for empty input', () => {
    expect(normalize('')).toBe('')
  })
})
