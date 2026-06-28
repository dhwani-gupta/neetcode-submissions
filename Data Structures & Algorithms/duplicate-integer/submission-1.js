class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const isThere = new Set();
        for(const num of nums){
            if(isThere.has(num)) return true;
            isThere.add(num);
        }
        return false
    }
}
