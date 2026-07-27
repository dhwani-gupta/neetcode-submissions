class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0;
        let maxLen = 0;
        const chrSet = new Set();

        for(let i=0;i<s.length;i++){
            while(chrSet.has(s[i])){
                chrSet.delete(s[left]);
                left++;
            }
             chrSet.add(s[i])
            maxLen = Math.max(maxLen, i-left +1);
        }
        return maxLen;



    }
}
