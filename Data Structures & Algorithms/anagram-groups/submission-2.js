class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i of strs){
            let strsSorted = i.split("").sort().join("")
            if(!map[strsSorted]){
                map[strsSorted] = [];
            }
            map[strsSorted].push(i)
        }
        return Object.values(map)
       
        
    }
}
