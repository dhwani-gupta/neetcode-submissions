class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let word of strs){
            let count = new Array(26).fill(0);
            for(let char of word){
                let index = char.charCodeAt(0)-97;//To get the index of every character.
                count[index]++
            }
            let key = count.join("#") //This # is to make every pattern unique.
            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(word);
        }
        return Array.from(map.values())
    }
}
