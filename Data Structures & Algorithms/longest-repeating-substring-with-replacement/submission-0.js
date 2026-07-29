class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let l = 0;
        let result = 0;

        for (let r = 0; r < s.length; r++) {
            count[s[r]] = 1 + (count[s[r]] || 0);
            while ((r - l + 1) - Math.max(...Object.values(count)) > k) {
                count[s[l]]--;
                l++;
            }
            result = Math.max(result, r - l + 1);
        }

        return result;
    }
}
