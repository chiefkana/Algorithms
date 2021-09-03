/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  function reverseStr(x) {
    x = parseInt(x);
    if (x < 0) x = x * -1;
    if (x === 0) return "0";
    let res = [];
    while (x % 10 >= 0) {
      if (x === 0) break;
      res.push(x % 10);
      x = parseInt(x / 10);
    }
    let ans = res.join("");
    if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return "0";
    return ans;
  }

  let s1 = x.toString().split("");
  let s2 = reverseStr(x).split("");
  let ans = true;
  for (let i = 0; i < s2.length / 2; i++) {
    if (!(s1[i] === s2[i])) ans = false;
  }
  return ans;
};
