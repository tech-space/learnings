# Majority Element
# http://www.geeksforgeeks.org/majority-element/
# Author: Srivathsan
# Email: srivathsankr7@gmail.com

def majority_element(arr):
    n = len(arr)
    hashmap = {}
    for i in arr:
        if i in hashmap:
            val = hashmap[i] + 1
            if val > n/2:
                return i
            else:
                hashmap[i] = val
        else:
            hashmap[i] = 1
    return -1

if __name__ == '__main__':
    arr = [2,2,2,2,5,5,2,3,3]
    print(majority_element(arr))