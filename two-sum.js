/**
 * 输出在nums相加之和等于target的两个数所在下标
 * 
 * @param {number} nums 
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }

    return result;
};

console.log(twoSum([11, 15, 2, 7], 9));
