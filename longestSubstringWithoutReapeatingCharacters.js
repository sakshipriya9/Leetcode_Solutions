//Problem No: 3 (Medium)

var lengthOfLongestSubstring = function(s) {
    let map = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }

    map.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};