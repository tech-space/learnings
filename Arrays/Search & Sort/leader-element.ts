// Leader Element
// http://www.geeksforgeeks.org/leaders-in-an-array/

/**
 * Author: Arunkumar Srisailapathi
 * Email: sail.arunkumar@gmail.com
 * Web: arunkumars08.github.io
 */

/**
 * Input: [16, 17, 4, 3, 5, 2]
 * Output: 17 5 2
 */

class LeaderElements {

    find (arr: Array<number>): Array<number> {
        let result: Array<number> = [];
        const len: number = arr.length;
        let max: number;
        result.push(arr[len - 1]); // Rightmost element is always a leader.
        max = arr[len - 1];
        for (let i = len - 2; i >= 0; -- i) {
            if (arr[i] > max) {
                max = arr[i];
                result.push(max);
            }
        }

        return result.reverse();
    }

    constructor (arr: Array<number>) {
        console.log(this.find(arr));
    }
}
