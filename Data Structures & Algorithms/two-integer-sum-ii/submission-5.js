class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //[1,2,3,4] = 3 

        //brute-force

        // for(let l=0;l<numbers.length-1;l++){
        //     let r = numbers.length-1;

        //     while(r>l){
        //         if(numbers[l]+numbers[r]==target){
        //             return [l+1, r+1];
        //         }
        //         r--;

        //     }
        // }

        //optimal

        let i = 0;
        let j = numbers.length - 1;

        while (i < j) {
            const sum = numbers[i] + numbers[j]

            if (sum === target) {
                return [i + 1, j + 1];
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
    }
}
