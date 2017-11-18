/*
 * @Author: luoyec 
 * @Date: 2017-11-16 22:56:22 
 * @Last Modified by: luoyec
 * @Last Modified time: 2017-11-18 21:40:20
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (allUnique(s, i, j)) {
                ans = Math.max(ans, j - i);
            }
        }
    }

    return ans;
};

var allUnique = function(s, start, end) {
    let set = new Set();
    for (let i = start; i < end; i++) {
        let ch = s[i];

        if (set.has(ch)) return false;

        set.add(ch);
    }

    return true;
};

let ans = lengthOfLongestSubstring(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
);

console.log(ans);
