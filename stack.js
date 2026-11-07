// Nyxa: small helpers for the stack of chapters in scrolled mode
export const chapterAt = (tops, y) => Math.max(0, tops.findLastIndex(top => top <= y))