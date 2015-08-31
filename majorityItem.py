# given an array of integers with length n, there is at most one value that can appear > n / 2 times
# please write a function returns this value if it exists, otherwise, just return None

# try to use constant space
# assume the value exists
# [1, 1, 3, 4, 5, 2, 1, 1]
a, != b
c, != d

def find_majority(nums):
    num_map = {}
    for num in nums:
        if num in num_map:
            num_maps[num] += 1
        else:
            num_maps[num] = 0
            
    threshold = len(nums) / 2
    for num_key in num_map:
        if num_map[num_key] > threshold:
            return num_key
    return None

chenmy@alumni.stanford.edu