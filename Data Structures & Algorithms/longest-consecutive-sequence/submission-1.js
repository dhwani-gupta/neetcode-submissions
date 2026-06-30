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

        for (let num of set) {
            if (!(set.has(num - 1))) {
                let current = num;
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
