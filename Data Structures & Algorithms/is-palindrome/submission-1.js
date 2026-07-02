class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //brute force Approach.
        // const rev = s.replaceAll(" ", "").split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

        // const rev1 = rev.split('').reverse().join('');

        // if (rev1 == rev) {
        //     return true;
        // } else {
        //     return false;
        // } 

        //Two-pointer Approach.
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphaNumeric(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;

    }

    isAlphaNumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')

        );

    }


}
