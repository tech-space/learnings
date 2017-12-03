// Majority Element
// http://www.geeksforgeeks.org/majority-element/

/**
 * Author: Arunkumar Srisailapathi
 * Email: sail.arunkumar@gmail.com
 * Web: arunkumars08.github.io
 */

/**
 * Input: [2,2,2,2,5,5,2,3,3]
 * Output: 2
 */

class MajorityElement {

    find (arr: Array<number>): any {
        let hash: any = {};
        const len: number = arr.length;
        for (let i = 0; i < len; ++ i) {
            let a: number = arr[i];
            if (hash.hasOwnProperty(a)) {
                hash[a] = hash[a] + 1;
                if (hash[a] > (len / 2)) {
                    return a;
                }
            } else {
                hash[a] = 1;
            }
        }
        return -1;
    }

    constructor (arr: Array<number>) {
        console.log(this.find(arr));
    }
}
