/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  let res = [];
  let sign = "-";
  if (x < 0) {
    res.push(sign);
    x = x * -1;
  }
  while (x % 10 >= 0) {
    if (x === 0) break;
    res.push(x % 10);
    x = parseInt(x / 10);
  }
  let ans = parseInt(res.join(""));
  if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};
