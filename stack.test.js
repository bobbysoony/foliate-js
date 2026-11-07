import { expect, test } from 'vitest'
import { chapterAt, isFar } from './stack.js'

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

test('isFar keeps chapters on or near the screen', () => {
    // screen from 5000 to 5600, keep anything closer than 1800
    expect(isFar(4000, 5100, 5000, 5600, 1800)).toBe(false) // on screen
    expect(isFar(1000, 3500, 5000, 5600, 1800)).toBe(false) // just above
    expect(isFar(7000, 9000, 5000, 5600, 1800)).toBe(false) // just below
})

test('isFar finds chapters far above or below', () => {
    expect(isFar(0, 3000, 5000, 5600, 1800)).toBe(true)
    expect(isFar(7500, 9000, 5000, 5600, 1800)).toBe(true)
})