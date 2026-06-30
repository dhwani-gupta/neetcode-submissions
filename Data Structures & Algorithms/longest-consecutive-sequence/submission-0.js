class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set();

        for (let n of nums) {
            set.add(n);
        }

        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!(set.has(nums[i] - 1))) {
                let current = nums[i];
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }
                max = Math.max(max, length);

            }

        }
        return max



    }
}
