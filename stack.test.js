import { expect, test } from 'vitest'
import { chapterAt } from './stack.js'

test('chapterAt finds the chapter that started last above y', () => {
    const tops = [0, 1000, 1500]
    expect(chapterAt(tops, 0)).toBe(0)
    expect(chapterAt(tops, 999)).toBe(0)
    expect(chapterAt(tops, 1000)).toBe(1)
    expect(chapterAt(tops, 9000)).toBe(2)
})

test('chapterAt gives the first chapter when y is above them all', () => {
    expect(chapterAt([0, 1000], -50)).toBe(0)
})

test('one chapter, and y exactly on a top', () => {
    expect(chapterAt([0], 500)).toBe(0)
    expect(chapterAt([0, 1000], 1000)).toBe(1)
})
