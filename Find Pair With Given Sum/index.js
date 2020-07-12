/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let map = {};

    //pick a number target - 30( given)
    let t = target - 30;

    for (let i = 0; i < nums.length; i++) {
        let y = t - nums[i];

        if (y in map) {
            return [map[y], i]
        } else {
            map[nums[i]] = i;
        }
    }
    return [-1, -1]
};

let  nums = [1, 10, 25, 35, 60], target = 90;
console.log(twoSum(nums,target));
nums = [20, 50, 40, 25, 30, 10], target = 90;
console.log(twoSum(nums,target));