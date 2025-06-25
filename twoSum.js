var twoSum = function(nums, target) {
    const map = {}; // Stores number as key and its index as value

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return []; 
};