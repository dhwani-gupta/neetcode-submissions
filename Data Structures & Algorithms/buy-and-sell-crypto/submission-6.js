class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let sell = 1;
        let buy = 0;
        let profit = 0;

        while(sell<prices.length){
            if(prices[sell]<prices[buy]){
                buy=sell;
            }else{
                let currentProfit = (prices[sell]-prices[buy])
                profit = Math.max(profit, currentProfit);
            }
            sell++;
        }

        return profit;




    }
}
