class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const num of nums){
            count[num]=(count[num]||0)+1;
        }
        // console.log(count);

        const arr = Object.entries(count).map(([num,freq])=>[freq, parseInt(num)]);
        const arrSort= arr.sort((a,b)=>b[0]-a[0]);
        // console.log(arrSort);

        const result = arrSort.slice(0,k).map(p=>p[1]);
        console.log(result);
        return result;






        
        
    }
}
