class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0;
        let maxLen = 0;
        const charSet = new Set();

        for(let i=0; i<s.length;i++){
            console.log(s[i]);
            while(charSet.has(s[i])){
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[i])
            maxLen = Math.max(maxLen, i-left +1);
        }
        return maxLen
    }
        
}
