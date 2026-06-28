class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for (let s of strs) {
            encode += s.length + "#" + s
        }
        // console.log(encode)

        return encode;


    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + length);

            res.push(word)


            i = j + 1 + length;

        }

        return res;

    }
}
