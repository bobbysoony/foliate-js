// Nyxa: small helpers for the stack of chapters in scrolled mode
export const chapterAt = (tops, y) => Math.max(0, tops.findLastIndex(top => top <= y))

// Is a chapter (`top` to `bottom`) more than `distance` away from the screen (`start` to `end`)?
export const isFar = (top, bottom, start, end, distance) =>
    bottom < start - distance || top > end + distance