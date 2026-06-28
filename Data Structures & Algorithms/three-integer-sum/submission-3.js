class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const nSort=nums.sort((a,b)=>a-b);
        const result =[];

        for(let i=0;i<nSort.length-2;i++){
            if(i>0 && nSort[i]==nSort[i-1]){
                continue;
            }

            let left = i+1;
            let right = nSort.length-1;

            while(left<right){
                const sum = nSort[i]+nSort[left]+nSort[right];

                if(sum===0){
                    result.push([nSort[i], nSort[left], nSort[right]]);

                    while(left<right && nSort[left]===nSort[left+1])left++;
                    while(left<right && nSort[right]===nSort[right-1])right--;

                    left++;
                    right--;
                }else if(sum<0){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return result;
    }
}
