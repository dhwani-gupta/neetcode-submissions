class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            for(let j=nums.length;j>0;j--){

                if(nums[i]+nums[j]==target && i!=j){
                    return [i,j]
                }


            }
        }
    }
}
