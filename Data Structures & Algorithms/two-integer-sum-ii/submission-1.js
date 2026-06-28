class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0;i<numbers.length;i++){
            for(let j=numbers.length; j>0;j--){
                if(numbers[i]+numbers[j] == target && i!=j){
                    // console.log(i,j)
                    return [i+1, j+1];
                }
            }
        }
    }
}
