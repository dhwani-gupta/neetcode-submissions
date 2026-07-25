class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let a = 0;
        let b = prices.length - 1;

        let profit = [];
        if(prices.length===1){
            return 0;
        }

        while (b > a) {

            for (let i = b; i > a; i--) {
                if (prices[a] > prices[i]) {
                    profit.push(0);
                } else if (a < b && prices[a] <= prices[i]) {
                    profit.push(prices[i] - prices[a]);
                }
            }
                a++;

        }

        return Math.max(...profit);
    }
}
