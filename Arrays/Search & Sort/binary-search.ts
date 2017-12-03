// Binary Search
// http://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/

/**
 * Author: Arunkumar Srisailapathi
 * Email: sail.arunkumar@gmail.com
 * Web: arunkumars08.github.io
 */

/**
 * Input: [1, 2, 3, 4, 5] and find 3
 * Output: Found
 */

class BinarySearch {
    find(arr: Array<number>, search: number, low: number, high: number): number {
        if (high < low) return -1;

        let mid: number = Math.floor(low + (high - low) / 2);
        if (arr[mid] === search) return mid;

        if (search < arr[mid]) {
            return this.find(arr, search, low, mid - 1);
        } else {
            return this.find(arr, search, mid + 1, high);
        }
    }

    constructor(arr: Array<number>, search: number) {
        console.log(this.find(arr, search, 0, arr.length - 1));
    }
}
