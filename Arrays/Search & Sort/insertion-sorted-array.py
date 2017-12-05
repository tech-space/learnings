# Insertion in a sorted array
# http://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/
# Author: Srivathsan
# Email: srivathsankr7@gmail.com

def find_position(l, h, arr, val):
    if h < l:
        return l
    mid = int(l + (h - l)/ 2)
    if h == mid:
        return h
    if arr[mid] == val:
        return mid
    elif arr[mid] > val:
        return find_position(l, mid-1, arr, val)
    else:
        return find_position(mid+1, h, arr, val)

def insert(arr, val):
    pos = find_position(0, len(arr)-1, arr, val)
    for i in range(pos, len(arr)):
        temp = arr[i]
        arr[i] = val
        val = temp
    arr.append(val)
    return arr


if __name__ == '__main__':
    arr =  [1, 2, 3, 5, 8] 
    newarr = insert(arr, 4)
    print(newarr)