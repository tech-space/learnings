# Leader Element
# http://www.geeksforgeeks.org/leaders-in-an-array/
# Author: Srivathsan
# Email: srivathsankr7@gmail.com

def find_leader(arr):
    max = -1
    for i in arr[::-1]:
        if i > max:
            print(i, end=' ')
            max = i

if __name__ == '__main__':
    arr = [16, 17, 4, 3, 5, 2]
    find_leader(arr)