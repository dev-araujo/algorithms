def binary_search(my_list, item):
    start = 0
    end = len(my_list) - 1

    while start <= end:
        middle = (start + end) // 2
        guess = my_list[middle]

        if guess == item:
            return middle

        if guess > item:
            end = middle - 1
        else:
            start = middle + 1

    return None


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print(binary_search(my_list, 2))  # 1
print(binary_search(my_list, 8))  # 7
print(binary_search(my_list, 25))  # none
