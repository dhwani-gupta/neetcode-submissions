class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const rev = s.replaceAll(" ", "").split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

        const rev1= rev.split('').reverse().join('');

        if(rev1 == rev){
            return true;
        }else{
            return false;
        }

    }
}
