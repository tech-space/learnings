// Insertion in a sorted array
// http://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/

/**
 * Author: Arunkumar Srisailapathi
 * Email: sail.arunkumar@gmail.com
 * Web: arunkumars08.github.io
 */

/**
 * Input: [1, 2, 3, 5, 8] and insert 4
 */

class InsertionSortedArray {
    constructor(arr: Array<number>, insert: number) {
        const getPosition: number = new ModifiedBinarySearch().find(arr, insert, 0, arr.length - 1);
        const len: number = arr.length;

        if (getPosition + 1 === len) {
            if (arr[getPosition] <= insert) {
                arr.push(insert);
            } else {
                arr[getPosition + 1] = arr[getPosition];
                arr[getPosition] = insert;
            }
        } else {
            for (let i = len - 1; i >= getPosition; -- i) {
                arr[i + 1] = arr[i];
            }
            arr[getPosition + 1] = insert;
        }
        console.log(arr);
    }
}

class ModifiedBinarySearch {
    find(arr: Array<number>, insert: number, low: number, high: number): number {
        let mid: number = Math.floor((low + high) / 2);
        if (high === mid) return high;
        if (high < low) return low;

        if (insert < arr[mid]) {
            return this.find(arr, insert, low, mid - 1);
        } else {
            return this.find(arr, insert, mid + 1, high);
        }
    }
}
