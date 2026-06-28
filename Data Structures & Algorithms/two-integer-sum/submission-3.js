class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for(let i=0; i<nums.length;i++){
            // map.set(nums[i], i) Aproach 1
            let a = target - nums[i];
            // if(map.get(a) !== undefined && map.get(a) !== i){
            //     return [map.get(a),i];
            // } Approach 1

            if(map.has(a)){
                return [map.get(a),i]
            }

            map.set(nums[i],i)
        }
        return [];
        
    }
}
