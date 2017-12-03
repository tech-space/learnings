// Pair Sum
// http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/

/**
 * Author: Arunkumar Srisailapathi
 * Email: sail.arunkumar@gmail.com
 * Web: arunkumars08.github.io
 */

/**
 * Input: [1, 2, 3, 4, 5] and sum 8
 * Output: (3, 5)
 */

class PairSum {

    pair (arr: Array<number>, sum: number): any {
        let hash: any = {};
        for (let i = 0; i < arr.length; ++ i) {
            let a = arr[i];
            if (hash.hasOwnProperty(a)) {
                return {
                    [a]: hash[a]
                };
            }
            hash[sum - a] = a;
        }
        return -1;
    }

    constructor (arr: Array<number>, sum: number) {
        console.log(this.pair(arr, sum));
    }
}
