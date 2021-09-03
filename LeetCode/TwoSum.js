/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let l = nums.length;
    for (let i = 0; i < l; i++){
        let t = nums.indexOf(target - nums[i]);
        if(t > -1 && t !== i) {
            return [i, t];
            break;
        }
    }

};