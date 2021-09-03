/**
 * @param {string} s
 * @return {number}
 */

const ref = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function RomanToInt(s) {
  if (ref[s]) return ref[s];
  let subsL = s.substring(0, s.length - 2);
  let subsF = s.substring(2, s.length - 1);
  let first,
    second = subs.map(RomanToInt(subsL));
  if (first < second) {
    return second - first + RomanToInt(subsF);
  } else {
    return first + RomanToInt(s.substring(1));
  }
}
var romanToInt = RomanToInt;
