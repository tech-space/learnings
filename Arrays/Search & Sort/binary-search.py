# Binary Search
# http://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/
# Author: Srivathsan
# Email: srivathsankr7@gmail.com


def binary_search(arr, l, r, element):
    if l >= r:
        return -1
    else:
        mid = l + (r - l) / 2
        if arr[mid] == element:
            return mid
        elif arr[mid] > element:
            return binary_search(arr, l, mid-1, element)
        return binary_search(arr, mid+1, r, element)
    
if __name__ == '__main__':
    arr = [5, 6, 7, 8, 9, 10]
    print(binary_search(arr, 0, len(arr)-1, 9))
