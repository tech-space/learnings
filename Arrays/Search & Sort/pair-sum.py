# Pair Sum
# http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/
# Author: Srivathsan
# Email: srivathsankr7@gmail.com

def pair_sum(arr, sum):
    result = []
    for i in arr:
        if sum-i in arr:
            return i, sum-i
    return -1

if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5]
    res = pair_sum(arr, 8)
    print(res)
