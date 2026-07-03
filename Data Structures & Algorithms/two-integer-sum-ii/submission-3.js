class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //[1,2,3,4] = 3 

        for(let l=0;l<numbers.length-1;l++){
            let r = numbers.length-1;

            while(r>l){
                if(numbers[l]+numbers[r]==target){
                    return [l+1, r+1];
                }
                r--;

            }
        }

        







    }
}
